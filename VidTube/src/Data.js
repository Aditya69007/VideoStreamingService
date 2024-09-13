export const API_KEY = 'AIzaSyBqihxBOX2yQ8JtBDZME9fwC6VtpwbJGdc';

export const value_convertor =(value)=>{
    if(value>=1000000){
        return Math.floor(value/100000)+"M";
    }  
    else if(value>=1000) return Math.floor(value/1000)+"K";
    else return value;
}