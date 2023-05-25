using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace INTRODUCTION_TO_WEB_FORMS
{
    public partial class Contact : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            // taking whatever is in the input and assigning it to the tool I dragged in that was called 'Label' (a placeholder)
            // In web page UI it will allow user to input words into the textbox and when they press the 'button' the words will then display within the 'Lable' placeholder
            Label1.Text = TextBox1.Text;
        }
    }
}