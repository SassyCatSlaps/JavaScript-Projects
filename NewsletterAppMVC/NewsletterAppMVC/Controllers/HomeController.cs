using NewsletterAppMVC.Models;
using NewsletterAppMVC.View_Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NewsletterAppMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        // Simple server validation code block
        [HttpPost]
        public ActionResult SignUp(string firstName, string lastName, string emailAddress)
        {
            if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName) || string.IsNullOrEmpty(emailAddress))
            {
                return View("~/Views/Shared/Error.cshtml");
            }
            else
            {
                using (NewsletterEntities db = new NewsletterEntities())
                {
                    var signup = new SignUp();
                    signup.FirstName = firstName;
                    signup.LastName = lastName;
                    signup.EmailAddress = emailAddress;

                    db.SignUps.Add(signup);
                    db.SaveChanges();
                }

                // OLD METHOD DEMO
                //// utilizing ADO.NET [clunky syntax way]
                
                //// creating a query/insert statement -- help prevent sql injection
                //string queryString = @"INSERT INTO SignUps (FirstName, LastName, EmailAddress) VALUES
                //                        (@FirstName, @LastName, @EmailAddress)";
                //using (SqlConnection connection = new SqlConnection(connectionString))
                //{
                //    SqlCommand command = new SqlCommand(queryString, connection);
                //    // add parameters to the command
                //    command.Parameters.Add("@FirstName", SqlDbType.VarChar);
                //    command.Parameters.Add("@LastName", SqlDbType.VarChar);
                //    command.Parameters.Add("@EmailAddress", SqlDbType.VarChar);

                //    // give the parameter's values
                //    command.Parameters["@FirstName"].Value = FirstName;
                //    command.Parameters["@LastName"].Value = LastName;
                //    command.Parameters["@EmailAddress"].Value = EmailAddress;

                //    connection.Open();
                //    command.ExecuteNonQuery();
                //    connection.Close();
                //}
                return View("Success");
            }
        }
        //public ActionResult About()
        //{
        //    ViewBag.Message = "Your application description page.";

        //    return View();
        //}

        //public ActionResult Contact()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}

        //public ActionResult Admin()
        //{
                // OLD METHOD DEMO
                //string queryString = @"SELECT Id, FirstName, LastName, EmailAddress, SocialSecurityNumber from SignUps";

                //// created a list of the model
                //List<NewsletterSignUp> signups = new List<NewsletterSignUp>(); 

                //using (SqlConnection connection = new SqlConnection(connectionString))
                //{
                //    SqlCommand command = new SqlCommand(queryString, connection);

                //    connection.Open();

                //    SqlDataReader reader = command.ExecuteReader();
                //    while (reader.Read())
                //    {
                //        var signup = new NewsletterSignUp();
                //        signup.Id = Convert.ToInt32(reader["Id"]);
                //        signup.FirstName = reader["FirstName"].ToString();
                //        signup.LastName = reader["LastName"].ToString();
                //        signup.EmailAddress = reader["EmailAddress"].ToString();
                //        signup.SocialSecurityNumber = reader["SocialSecurityNumber"].ToString();
                //        signups.Add(signup);
                //    }
                //}      
        //}
    }
}