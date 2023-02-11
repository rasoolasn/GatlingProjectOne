package com.gatling.test.api

//import com.sun.tools.jdeprscan.CSV
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FeedersDemo extends Simulation{

  //Protocol
  val httpProtocol = http.baseUrl(url= "https://computer-database.gatling.io/")

  //Scenario
  val feeder = csv(fileName ="data/data1.csv").circular

  val scn = scenario(scenarioName = "Feeders Demo")
    .repeat(times = 1){
       feed(feeder)
        .exec { session =>
          println("Name: " + session("name").as[String])
          println("Job: " + session("job").as[String])
          session
        }

      .pause(duration = 1)

      .exec(http(requestName = "Goto home page")
      .get("/#{page}")
      )
    }
      //Setup
      setUp(scn.inject(atOnceUsers(users = 3)))
}
