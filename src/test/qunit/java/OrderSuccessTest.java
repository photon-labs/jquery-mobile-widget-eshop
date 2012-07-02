import org.codehaus.jstestrunner.junit.JSTestSuiteRunner;
import org.junit.runner.RunWith;

/**
 * Run all JS tests associated with this project.
 */
@RunWith(JSTestSuiteRunner.class)
@JSTestSuiteRunner.Include(value="eshop/widgets/EshopOrderSuccessListTest.html")
public class OrderSuccessTest {
}
