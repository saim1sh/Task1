# Task1

1. What are some differences between interfaces and types in TypeScript?

 ইন্টারফেস, object এর সময় এবং টাইপ, function অ্যান্ড array তে use করা efficient 
interface এ extend ব্যাবহার করে property inherit করা যায়, type এর ক্ষেত্রে & ব্যাবহার করতে হয় 
interface এ merge করা যায় ,type এর ক্ষেত্রে করা যায় না 

2.What is the use of the keyof keyword in TypeScript? Provide an example.

keyof সাধারণত একটি টাইপের সব key কে string literal হিসেবে বের করে, যা union দিয়ে আলাদা করা থাকে 
type User = {
  name: string;
  age: number;
};

type Keys = keyof User; 
// "name" | "age" 
