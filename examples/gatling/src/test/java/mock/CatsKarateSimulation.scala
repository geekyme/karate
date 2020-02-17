package mock

import com.intuit.karate.gatling.KarateProtocol
import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class CatsKarateSimulation extends Simulation {
  val protocol: KarateProtocol = karateProtocol()

  protocol.nameResolver = (req, ctx) => req.getHeader("karate-name")

  val custom = scenario("custom").exec(karateFeature("classpath:mock/example.feature"))

  setUp(
    custom.inject(constantUsersPerSec(1000) during (30 seconds)).protocols(protocol)
  ).maxDuration(60 seconds)
}
