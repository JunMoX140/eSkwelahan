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
  teacherId: z.number()
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
              VALUES (${newClass.subjectName}, ${newClass.subjectCode},${newClass.description},${newClass.schedule},${newClass.teacherId}) RETURNING *`;

    res.status(201).send(camelcaseKeys(createdClass));
  });

  teacherRouter.get("/class/:classid/quizes", async (req, res) => {
    const { classid } = req.params;
    const quizes =
    await sql`SELECT s.subject_id, ac.activity_id,
              ac.title FROM subject as s left join activity as ac ON s.subject_id=ac.subject_id WHERE
              s.subject_id=${Number(classid)};`;

    if(quizes){res.status(201).send(camelcaseKeys(quizes))}
    else{res.status(404).send("details not found");}
    
  });

  teacherRouter.get("/class/:classid/quizes/:quizid", async (req, res) => {
    const { quizid } = req.params;
    const quizesdetails =
    await sql`SELECT ac.activity_id, aci.activity_item_id, 
                  aci.quiz_type, aci.activity_content FROM activity as ac left join
                  activity_items as aci ON ac.activity_id=aci.activity_id
                  WHERE aci.activity_id=${Number(quizid)}`;

    if(quizes){res.status(201).send(camelcaseKeys(quizesdetails))}
    else{res.status(404).send("Quiz details not found");}
    
  });

  teacherRouter.get("/class/:classid/details", async (req, res) => {
    const { classid } = req.params;
    const [classDetails] =
    await sql`SELECT subject_id, subject_name, schedule FROM subject WHERE subject_id=${Number(classid)};`;

    if(classDetails){res.status(201).send(camelcaseKeys(classDetails)).json();}
    else{res.status(404).send("Quizes not found");}
    
  });

  teacherRouter.post("/class/quiz", async (req, res) => {
    const { title, classid } = req.body;

    const [createdQuiz] =
    await sql `INSERT INTO activity (title, subject_id) VALUES (${title}, ${Number(classid)}) RETURNING *;`;

    if(createdQuiz){res.status(201).send(camelcaseKeys(createdQuiz)).json();}
    else{res.status(404).send("something went wrong");}
    
  });

  teacherRouter.post("/class/quiz/add", async (req, res) => {
    const { content, quizId, quizType } = req.body;

    const [createdQuiz] =
    await sql `INSERT INTO activity_items (activity_id, quiz_type, activity_content) VALUES (${Number(quizId)}, ${Number(quizType)},${content}) RETURNING *;`;

    if(createdQuiz){res.status(201).send(camelcaseKeys(createdQuiz)).json();}
    else{res.status(404).send("something went wrong");}
    
  });

  teacherRouter.get("/class/quiz/details/:quizId", async (req, res) => {
    const { quizId } = req.params;

    console.log(quizId)
    const details =
    await sql `SELECT ac.activity_id, aci.activity_item_id, aci.activity_content
                  FROM activity as ac left join activity_items as aci ON 
                  ac.activity_id=aci.activity_id WHERE ac.activity_id=${Number(quizId)}`;

    const quiz = await sql `SELECT activity_id, title FROM activity WHERE activity_id=${Number(quizId)}`;

    const quizDetails= {
      details: quiz,
      content: details
    }

    console.log(quizDetails);
    if(quizDetails){res.status(201).send(camelcaseKeys(quizDetails));}
    else{res.status(404).send("something went wrong");}
    
  });

  export default teacherRouter;