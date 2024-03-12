// index.js
Page({
    data: {
        phoneNumber: "",
        password: "",
        passwordInputType: "password", 
        eyeIcon: "/images/close.png", 
        style1: 'background-color: rgb(86, 219, 208);', 
        style2: 'background-color: rgb(255, 255, 255, 0);' 
    },
    handlePhoneNumberInput: function (event) {
        this.setData({
            phoneNumber: event.detail.value,
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

    //function to change the button color and attributes when clicked
    c1(){
        this.setData({
            style1: "background-color: orange;" // Orange color
        });
    },
    c2(){
        this.setData({
            style1: "background-color: rgb(86, 219, 208);" 
        });
    },
    c3(){
        this.setData({
            style2: "background-color: rgb(255, 255, 255, 0); color: orange; border: 1rpx solid orange" // Orange color
        });
    },
    c4(){
        this.setData({
            style2: "background-color: rgb(255, 255, 255, 0);" 
        });
    },
    handleLogin: function () {
        if (!this.data.phoneNumber && !this.data.password) {
            wx.showToast({
                title: '请输入手机号码',
                icon: 'none',
                duration: 2000
            });
            return;
        }

        // Additional check for an empty phone number
        if (!this.data.phoneNumber) {
            wx.showToast({
                title: '请输入手机号码',
                icon: 'none',
                duration: 2000
            });
            return;
        }

        // Additional check for an empty password
        if (!this.data.password) {
            wx.showToast({
                title: '请输入密码',
                icon: 'none',
                duration: 2000
            });
            return;
        }

        // Add your login logic here
        console.log("Phone Number: " + this.data.phoneNumber);
        console.log("Password: " + this.data.password);

        // You can add your authentication logic or navigate to the next page
        wx.showToast({
            title: '请输入密码',
            icon: 'none',
            duration: 2000
        });
        wx.navigateTo({
          url: '/pages/page2/page2',
        })
    },

    handleSignup: function() {
        // code here to allow going to another page when clicked
        wx.navigateTo({
          url: '/pages/page3/page3',
        })
    },
});
