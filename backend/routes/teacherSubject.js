import express from "express";
import { sql } from "../db.js";
import camelcaseKeys from "camelcase-keys";

const teacherSubRouter = express.Router();

teacherSubRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const teachersubs = await sql`SELECT S.subject_id, S.subject_name, S.description, S.code, 
                                    COUNT(SS.user_id) as enrolled FROM subjects as S LEFT JOIN 
                                    subjects_students as SS ON S.subject_id=SS.subject_id 
                                    WHERE S.teacher_id=${Number(id)} GROUP BY S.subject_id;`;
                                    if (teachersubs) {
                                      res.status(200).send(teachersubs);
                                    } else {
                                      res.status(404).send("subjects not found");
                                    }
    // res.status(200).send(teachersubs.map((teachersub) => camelcaseKeys(teachersub)));
  });

  export default teacherSubRouter;