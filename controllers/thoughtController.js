const { User, Thought} = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find()
        .sort({createdAt: -1})
        .then((thoughtData) => {
            res.json(thoughtData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    getSingleThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId}) 
        .then((thoughtData) => {
            if (!thoughtData) {
                return res.status(404).json({
                    message: "Thought not found."
                })
            }
            res.json(thoughtData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    createThought(req, res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: thoughtData._id}},
                {new: true},
            )
        })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({
                    message: "User not found."
                })
            }
            res.json({message: "Thought successfully created."})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    }, 

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true},
        )
        .then((thoughtData) => {
            if (!thoughtData) {
                return res.status(404).json({
                    message: "Thought not found."
                })
            }
            res.json(thoughtData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thoughtData) => {
            if (!thoughtData) {
                return res.status(404).json({
                    message: "Thought not found."
                })
            }
            return User.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {thoughts: req.params.thoughtId}},
                {new: true},
            )
        })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({
                    message: "Thought not found."
                })
            }
            res.json({message: "Thought successfully deleted."})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    addReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true ,new: true},
        )
        .then((thoughtData) => {
            if (!thoughtData) {
                return res.status(404).json({
                    message: "Thought not found."
                })
            }
            res.json(thoughtData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true},
        )
        .then((thoughtData) => {
            if (!thoughtData) {
                return res.status(404).json({
                    message: "Thought not found."
                })
            }
            res.json(thoughtData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    }


};

module.exports = thoughtController;