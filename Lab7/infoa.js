var app=angular.module("userinfo",[]);

app.filter("cartfilter",function(){
    return function(input,x){
        if(input >= x){
            return input;
        }
        else{
            return input.substring(0,num);
        }
    }
});

app.controller("userController",function($scope){
    $scope.users=[
        {id:1,name:"Amith",gender:"Male",phone:9876543210,mail:"amith@gmail.com",cart:2},
        {id:2,name:"Daniel",gender:"Male",phone:9876543210,mail:"daniel@gmail.com",cart:3},
        {id:3,name:"Chirag",gender:"Female",phone:9876543210,mail:"chiru@gmail.com",cart:3},
        {id:4,name:"Zen",gender:"Female",phone:9876543210,mail:"zen@gmail.com",cart:0},
        {id:5,name:"Peter",gender:"Male",phone:9876543210,mail:"peter@gmail.com",cart:2},
        {id:6,name:"Mahesh",gender:"Male",phone:9876543210,mail:"mahi@gmail.com",cart:6},
        {id:7,name:"Prakesh",gender:"Male",phone:9876543210,mail:"prakesh@gmail.com",cart:3},
        {id:8,name:"Afzal",gender:"Male",phone:9876543210,mail:"afzal@gmail.com",cart:1},
        {id:9,name:"Divya",gender:"Female",phone:9876543210,mail:"divya@gmail.com",cart:0},
        {id:10,name:"Hemanth",gender:"Male",phone:9876543210,mail:"hemu@gmail.com",cart:3},
    ];
});

var app=angular.module("userpayinfo",[]);

app.controller("userpayController",function($scope){
    $scope.userspay=[
        {id:1,name:"Amith",payment:6000},
        {id:2,name:"Daniel",payment:4500},
        {id:3,name:"Chirag",payment:3000},
        {id:4,name:"Zen",payment:0},
        {id:5,name:"Peter",payment:5000},
        {id:6,name:"Mahesh",payment:6000},
        {id:7,name:"Prakesh",payment:4500},
        {id:8,name:"Afzal",payment:2000},
        {id:9,name:"Divya",payment:0},
        {id:10,name:"Hemanth",payment:6000},
    ];
});

var app=angular.module("employeeinfo",[]);

app.filter("myfilter",function(){
    return function(input,option){
        if(isNaN(option) || option==""){
            return input;
        }
        else{
            return input.substring(0,option).toUpperCase();
        }
    }
});

app.controller("empController",function($scope){
    $scope.empes=[
        {id:1,name:"bharat",gender:"Male",phone:9012345678,mail:"bharat@gmail.com",doj:"05-06-1998",sal:45000},
        {id:2,name:"ganga",gender:"Female",phone:9012345678,mail:"ganga@gmail.com",doj:"01-05-1998",sal:50000},
        {id:3,name:"mohan",gender:"Male",phone:9012345678,mail:"mohan@gmail.com",doj:"10-12-2000",sal:35000},
        {id:4,name:"sunil",gender:"Male",phone:9012345678,mail:"sunil@gmail.com",doj:"25-06-1997",sal:45000},
        {id:5,name:"ram",gender:"Male",phone:9012345678,mail:"ram@gmail.com",doj:"02-03-1995",sal:60000},
        {id:6,name:"tanu",gender:"Female",phone:9012345678,mail:"tanu@gmail.com",doj:"16-06-2005",sal:15000},
        {id:7,name:"vinay",gender:"Male",phone:9012345678,mail:"Vinay@gmail.com",doj:"09-10-2009",sal:20000},
        {id:8,name:"lakshmi",gender:"Female",phone:9012345678,mail:"lakshmi@gmail.com",doj:"04-04-2008",sal:30000},
        
    ];
});

angular.module("combinemod", ["userinfo","userpayinfo", "employeeinfo"]);