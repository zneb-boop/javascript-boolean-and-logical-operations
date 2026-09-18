let lastMonthPaidMoreThan4000 = lastMonthPaid => 4000 ;
console.log(lastMonthPaidMoreThan4000); // true

let isWeekDay = {
    monday: true, 
    tuesday: true, 
    wednesday: true, 
    thursday: true, 
    friday: true, 
    saturday: false, 
    sunday: false
};
console.log(isWeekDay);// {monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: false, sunday: false}

let hasBoughtProductFromITCategory = true;

let hasAttendedDiscountEvent = true;

let isPlatinum = true;

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekDay && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || (isPlatinum);
console.log(hasPromotion); // true

let John ={
    lastMonthPaid: 4001,
    shopingDay: isWeekDay.friday,
    hasBoughtITBefore: !hasBoughtProductFromITCategory,
    theSecondDiscountEvent: hasAttendedDiscountEvent,
    goleMember : isPlatinum
}
console.log(John); // {lastMonthPaid: 4001, shopingDay: true, hasBoughtITBefore: true, theSecondDiscountEvent: true, goleMember: true}

let hasPromotionForJohn = (John.lastMonthPaid > 4000 && John.shopingDay && John.hasBoughtITBefore && !John.theSecondDiscountEvent) || (John.goleMember);
console.log(hasPromotionForJohn); // true