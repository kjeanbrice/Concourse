using System;
using System.Collections.Generic;

namespace MyConcourse.Models
{
    // Models returned by AccountController actions.

    public class ExternalLoginViewModel
    {
        public string Name { get; set; }

        public string Url { get; set; }

        public string State { get; set; }
    }

    public class ManageInfoViewModel
    {
        public string LocalLoginProvider { get; set; }

        public string Email { get; set; }

        public IEnumerable<UserLoginInfoViewModel> Logins { get; set; }

        public IEnumerable<ExternalLoginViewModel> ExternalLoginProviders { get; set; }
    }

    public class UserInfoViewModel
    {
        public string Email { get; set; }

        public bool HasRegistered { get; set; }

        public string LoginProvider { get; set; }

        private string _firstname = "";
        public string FirstName {
            get {
                return this._firstname;
            }
            set {
                if(value == null || value.Length == 0)
                {
                    this._firstname = "";
                }

                if(value.Length == 1)
                {
                    this._firstname = value.ToUpper();
                }

                string temp = value.ToLower();
                this._firstname = temp.Substring(0, 1).ToUpper() + temp.Substring(1);
                

            }
        }

        private string _lastname = "";
        public string LastName {
            get {
                return this._lastname;
            }
            set {
                if (value == null || value.Length == 0)
                {
                    this._lastname = "";
                }

                if (value.Length == 1)
                {
                    this._lastname = value.ToUpper();
                }

                string temp = value.ToLower();
                this._lastname = temp.Substring(0, 1).ToUpper() + temp.Substring(1);
            }
        }
    }

    public class UserLoginInfoViewModel
    {
        public string LoginProvider { get; set; }

        public string ProviderKey { get; set; }
    }
}
