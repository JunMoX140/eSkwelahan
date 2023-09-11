import express from "express";
import { sql } from "../db.js";
import camelcaseKeys from "camelcase-keys";
import { z } from "zod";
 
const teacherRouter = express.Router();

const TodoSchema = z.object({
  subjectName : z.string(),
  description : z.string(),
  subjectCode : z.string(),
  schedule: z.string(),
  teacher: z.number(),
});

teacherRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const tclass = await sql`SELECT S.subject_id, S.subject_name, S.description, S.code, 
                                    COUNT(SS.user_id) as enrolled FROM subject as S LEFT JOIN 
                                    subjects_students as SS ON S.subject_id=SS.subject_id 
                                    WHERE S.teacher_id=${Number(id)} GROUP BY S.subject_id;`;
                                    if (tclass) {
                                      res.status(200).send(tclass);
                                    } else {
                                      res.status(404).send("subjects not found");
                                    }
  });

  teacherRouter.post("/", async (req, res) => {
    const newClass = req.body;
    const parsedResult = TodoSchema.safeParse(newClass);
  
    if (!parsedResult.success) {
      return res.status(400).send(
        parsedResult.error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }))
      );
    }

    const [createdClass] =
    await sql`INSERT INTO subject (subject_name, code, description,schedule,teacher_id) 
              VALUES (${newClass.subjectName}, ${newClass.subjectCode},${newClass.description},${newClass.schedule},${newClass.teacher}) RETURNING *`;

    res.status(201).send(camelcaseKeys(createdClass));
  });

  export default teacherRouter;