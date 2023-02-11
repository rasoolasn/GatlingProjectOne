package com.gatling.test.api

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class PostPutDeleteAPIDemo extends Simulation{

  //protocol
  val httpProtocol =http
    .baseUrl(url="https://reqres.in/api")


  //scenario
  val  CreateUserscn = scenario(scenarioName= "Create User")
    .exec(
      http(requestName ="Create user req")
        .post(url="/users")
        .header(name= "content-type", value="application/json")
        .asJson
        .body(RawFileBody(filePath = "data/user.json")).asJson
//        .body(StringBody(
//          """
//            |{
//            |    "name": "John",
//            |    "job": "leader"
//            |}
//            | """.stripMargin)).asJson
       .check(
        status is 201,
        jsonPath( path = "$.name") is "John"
        )
    )

    val updateUserScn = scenario(scenarioName = "Update User")
      .exec(
        http(requestName = "Update user req")
        .put(url ="/users/2")
        .body(RawFileBody(filePath= "data/user.json")).asJson
          .check(
            status is 200 ,
            jsonPath(path = "$.name") is "John"
          )
      )
      .pause(2)

    val deleteUserScn = scenario(scenarioName = "Delete User")
      .exec(
        http(requestName = "delete user req")
         .delete(url = "/user/2")
         .check( status is 204 )
      )
  //setup
        .pause(2)

  setUp(
    CreateUserscn.inject(rampUsers( users = 10).during(5)),
    updateUserScn.inject(rampUsers( users = 5).during(3)),
    deleteUserScn.inject(rampUsers( users = 3).during(2))
  ).protocols(httpProtocol)

}
