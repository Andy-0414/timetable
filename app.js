const express = require('express');
const app = express();
const bodyParser = require('body-parser') // POST

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/data/:n/:c', (req, res) => {
    var data = [{}, {}, {}, {}, {
        time:
            [   '디자인', '디자인', '시스템', '시스템', '구조', '국어B', '수학',
                '국어A', '연극', '프그', '프그', '통사B', '정통', '정통',
                '구조', '영어A', '수학', '진로', '운건', '통사A', '동아리',
                '시스템', '정통', '국어A', '수학', '통사C', '영어B', '프그',
                '음악', '운건', '프그', '프그', '영어A', '자율']
    }]
    var n = req.params.n;
    var c = req.params.c;
    res.send({
        result: data[n].time[c]
    });
})

app.listen(3000, () => {

})