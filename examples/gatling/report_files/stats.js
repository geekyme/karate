var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "29907",
        "ko": "93"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "26354",
        "ok": "19717",
        "ko": "26354"
    },
    "meanResponseTime": {
        "total": "33",
        "ok": "25",
        "ko": "2428"
    },
    "standardDeviation": {
        "total": "648",
        "ok": "485",
        "ko": "7341"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "108"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "307"
    },
    "percentiles3": {
        "total": "110",
        "ok": "110",
        "ko": "26345"
    },
    "percentiles4": {
        "total": "227",
        "ok": "223",
        "ko": "26349"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29887,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 93,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "625",
        "ok": "623.062",
        "ko": "1.938"
    }
},
contents: {
"req_get---localhost-1ba60": {
        type: "REQUEST",
        name: "GET //localhost:8000/",
path: "GET //localhost:8000/",
pathFormatted: "req_get---localhost-1ba60",
stats: {
    "name": "GET //localhost:8000/",
    "numberOfRequests": {
        "total": "30000",
        "ok": "29907",
        "ko": "93"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "26354",
        "ok": "19717",
        "ko": "26354"
    },
    "meanResponseTime": {
        "total": "33",
        "ok": "25",
        "ko": "2428"
    },
    "standardDeviation": {
        "total": "648",
        "ok": "485",
        "ko": "7341"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "108"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "307"
    },
    "percentiles3": {
        "total": "110",
        "ok": "110",
        "ko": "26345"
    },
    "percentiles4": {
        "total": "227",
        "ok": "223",
        "ko": "26349"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29887,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 93,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "625",
        "ok": "623.062",
        "ko": "1.938"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
