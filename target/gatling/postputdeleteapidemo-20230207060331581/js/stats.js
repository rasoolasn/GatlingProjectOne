var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "483",
        "ok": "-",
        "ko": "483"
    },
    "maxResponseTime": {
        "total": "3566",
        "ok": "-",
        "ko": "3566"
    },
    "meanResponseTime": {
        "total": "1450",
        "ok": "-",
        "ko": "1450"
    },
    "standardDeviation": {
        "total": "1160",
        "ok": "-",
        "ko": "1160"
    },
    "percentiles1": {
        "total": "846",
        "ok": "-",
        "ko": "846"
    },
    "percentiles2": {
        "total": "1810",
        "ok": "-",
        "ko": "1810"
    },
    "percentiles3": {
        "total": "3215",
        "ok": "-",
        "ko": "3215"
    },
    "percentiles4": {
        "total": "3496",
        "ok": "-",
        "ko": "3496"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.625",
        "ok": "-",
        "ko": "0.625"
    }
},
contents: {
"req_create-user-req-8c986": {
        type: "REQUEST",
        name: "Create user req",
path: "Create user req",
pathFormatted: "req_create-user-req-8c986",
stats: {
    "name": "Create user req",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "483",
        "ok": "-",
        "ko": "483"
    },
    "maxResponseTime": {
        "total": "3566",
        "ok": "-",
        "ko": "3566"
    },
    "meanResponseTime": {
        "total": "1450",
        "ok": "-",
        "ko": "1450"
    },
    "standardDeviation": {
        "total": "1160",
        "ok": "-",
        "ko": "1160"
    },
    "percentiles1": {
        "total": "846",
        "ok": "-",
        "ko": "846"
    },
    "percentiles2": {
        "total": "1810",
        "ok": "-",
        "ko": "1810"
    },
    "percentiles3": {
        "total": "3215",
        "ok": "-",
        "ko": "3215"
    },
    "percentiles4": {
        "total": "3496",
        "ok": "-",
        "ko": "3496"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.625",
        "ok": "-",
        "ko": "0.625"
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
