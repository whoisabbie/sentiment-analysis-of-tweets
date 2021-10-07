const express = require('express');
const router = express.Router();
const Twit = require('twit');
const Sentiment = require('sentiment');
const mongoose = require('mongoose');
const User = require('../modles/User');

const twitter = new Twit({
    consumer_key: '*************************',
    consumer_secret: '**********************************************',
    access_token: '******************************************************',
    access_token_secret: '******************************************************'
});

const sentiment = new Sentiment();

router.use(express.json());

router.post('/result', (req, res) => {
    const { search } = req.body;

    twitter.get('search/tweets', { q: search, count: 100, tweet_mode: 'extended' }, (err, data, response) => {
        let positive = 0;
        let negative = 0;
        let neutral = 0;
        let result = [];
        let count = 0;
        console.log(data, 'data');
        data.statuses.map(tweet => {
            if (tweet.lang === 'en') {
                count = count + 1;
                let text = null
                let resultSkeleton = {
                    id: count,
                    text: null,
                    sentiment: null
                };
                if (tweet.retweeted_status) {
                    text = tweet.retweeted_status.full_text
                } else {
                    text = tweet.full_text
                }
                if (sentiment.analyze(text).score > 0) {
                    positive = positive + 1;
                    resultSkeleton.text = text;
                    resultSkeleton.sentiment = 'positive';
                } else if (sentiment.analyze(text).score < 0) {
                    negative = negative + 1;
                    resultSkeleton.text = text;
                    resultSkeleton.sentiment = 'negative';
                } else {
                    neutral = neutral + 1;
                    resultSkeleton.text = text;
                    resultSkeleton.sentiment = 'neutral';
                }
                result.push(resultSkeleton);
            }
        })
        res.json({ 'keyword': search, 'count': count, 'positive': positive, 'negative': negative, 'neutral': neutral, 'result': result });
        //res.json(data);
    });
});

router.get('/previousresults/:useremail', (req, res) => {
    const { useremail } = req.params;
    User.findOne({ useremail }, (err, userFound) => {
        if (err) return console.error(err);
        if (!userFound) {
            res.status(400).json('No User Found');
        } else {
            res.json({ 'result': userFound.results });
        }
    })
});

router.post('/saveresult', (req, res) => {
    const { sentimentResult, userID } = req.body;
    const _id = userID;
    const result = {
        keywords: sentimentResult.keyword,
        positive: sentimentResult.positive,
        negative: sentimentResult.negative,
        neutral: sentimentResult.neutral
    }
    User.findByIdAndUpdate(
        { _id },
        { $push: { results: result } },
        (err, done) => {
            if (err) return console.error(err);
            res.json('updated.');
        }
    )
});

module.exports = router;