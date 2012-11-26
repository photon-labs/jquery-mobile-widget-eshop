import org.codehaus.jstestrunner.junit.JSTestSuiteRunner;
import org.junit.runner.RunWith;

/**
 * Run all JS tests associated with this project.
 */
@RunWith(JSTestSuiteRunner.class)
@JSTestSuiteRunner.Include(value="eshop/widgets/EshopMyCartListTest.html")
public class MyCartTest {
}
