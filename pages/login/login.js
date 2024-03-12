// index.js
Page({
    data: {
        username: "",
        password: "",
        passwordInputType: "password", // Initial input type is set to password
        eyeIcon: "/images/close.png", // Path to the closed eye icon
    },
    handleUsernameInput: function (event) {
        this.setData({
            username: event.detail.value,
        });
    },
    handlePasswordInput: function (event) {
        this.setData({
            password: event.detail.value,
        });
    },
  
    togglePasswordVisibility: function () {
        const passwordInputType = this.data.passwordInputType === "password" ? "text" : "password";
        const eyeIcon = passwordInputType === "password" ? "/images/close.png" : "/images/open.png";
        this.setData({
            passwordInputType,
            eyeIcon,
        });
    },    

    handleLogin: function () {
        // Add your login logic here
        console.log("Username: " + this.data.username);
        console.log("Password: " + this.data.password);
        // You can add your authentication logic or navigate to the next page
    },

    handleSignUp: function() {
        //code here to allow to go to another page when clicked
    }
});
