import express from "express";
import Vote from "../models/index";

const router = express.Router();

router.get("/votes", (req, res) => {
  Vote.find({}, (err, collections) => {
    if (err) {
      res.sendStatus(500).json({ error: err, ok: false });
    }
    console.log(collections);
    res.json({ data: collections, ok: true });
  });
});

router.post("/vote/:id", (req, res) => {
  const id = req.params.id;
  function onSave(vote) {
    return (err) => {
      if (err) {
        return res.sendStatus(500).json({ error: err, ok: false });
      }
      res.json({
        ok: true,
        data: vote,
      });
    };
  }

  Vote.findOne({ showId: id }, (err, collection) => {
    if (collection) {
      collection.count = collection.count + 1;
      collection.save(onSave(collection));
    } else {
      let vote = new Vote();
      vote.showId = id;
      vote.count = 1;
      vote.save(onSave(vote));
    }
  });
});

export default router;
