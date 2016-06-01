//http://www.tutorialspoint.com/mongodb/mongodb_create_database.htm
//Create DB http://www.tutorialspoint.com/mongodb/mongodb_create_database.htm
/* SELECT person, SUM(score), AVG(score), MIN(score), MAX(score), COUNT(*)
 * FROM demo
 * WHERE score > 0 AND person IN('bob','jake')
 * GROUP BY person;
 */

db.demo.group({
    "key": {
        "person": true
    },
    "initial": {
        "sumscore": 0,
        "sumforaverageaveragescore": 0,
        "countforaverageaveragescore": 0,
        "countstar": 0
    },
    "reduce": function(obj, prev) {
        prev.sumscore = prev.sumscore + obj.score - 0;
        prev.sumforaverageaveragescore += obj.score;
        prev.countforaverageaveragescore++;
        prev.minimumvaluescore = isNaN(prev.minimumvaluescore) ? obj.score : Math.min(prev.minimumvaluescore, obj.score);
        prev.maximumvaluescore = isNaN(prev.maximumvaluescore) ? obj.score : Math.max(prev.maximumvaluescore, obj.score);
        if (true != null) if (true instanceof Array) prev.countstar += true.length;
        else prev.countstar++;
    },
    "finalize": function(prev) {
        prev.averagescore = prev.sumforaverageaveragescore / prev.countforaverageaveragescore;
        delete prev.sumforaverageaveragescore;
        delete prev.countforaverageaveragescore;
    },
    "cond": {
        "score": {
            "$gt": 0
        },
        "person": {
            "$in": ["bob", "jake"]
        }
    }
});
