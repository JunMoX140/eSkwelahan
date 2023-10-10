import express from "express";
import { sql } from "../db.js";
import camelcaseKeys from "camelcase-keys";
import { z } from "zod";

const studentRouter = express.Router();

const studentSchema = z.object({
    voucher: z.number()
  });

studentRouter.post("/", async (req, res)=> {
    const data = req.body;
    const parsedResult = studentSchema.safeParse(data);

    if (!parsedResult.success) {
        return res.status(400).send(
          parsedResult.error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          }))
        );
      }
   let [subject] = await sql `SELECT subject_id FROM subject WHERE voucher=${Number(data.voucher)}`;
   if (subject) {
    const [isEnrolled] = await sql `INSERT INTO subjects_students (subject_id, student_id, status)
                                    VALUES (${Number(subject.subject_id)}, ${Number(data.studentId)}, 0) RETURNING *`;
    if(isEnrolled){
        const [enrolledSubject] = await sql `SELECT s.subject_id, s.subject_name, s.description, s.schedule,s.code, 
                        concat(u.firstname,' ',u.lastname) as teacher FROM subject as s LEFT JOIN users as U ON
                        s.teacher_id=u.user_id WHERE s.subject_id=${Number(subject.subject_id)}`;
                        
        return res.status(201).send(camelcaseKeys(enrolledSubject));
    }
    }else{
      return res.status(404).json({ error: "Voucher not found!" });
    }
});

studentRouter.get("/:studentId", async(req, res)=>{
  const { studentId } = req.params;

  if(!Number(studentId)){
    return res.status(404).json({ error: "Invalid input" });
  }

  const subjects = await sql `SELECT s.subject_id, s.subject_name, s.description, s.schedule,s.code, 
                        concat(u.firstname,' ',u.lastname) as teacher FROM subjects_students as ss
                        LEFT JOIN subject as s ON ss.subject_id=s.subject_id LEFT JOIN users as u
                        ON u.user_id=s.teacher_id WHERE ss.student_id= ${Number(studentId)}`;
    if(!subjects){
      return res.status(404).json({ error: "Student class not found!" });
    }
    else{
      return res.status(200).send(camelcaseKeys(subjects));
    }
})


export default studentRouter;