//Question2
//This is not my full understnding of the question but an attempt.
//Trying to comapare with whatever we did in class.

function exams_status( total_marks, is_exams)
{
    if(is_exams){
        return total_marks >= 90;
    }
    return(total_marks >= 89 && total_marks <= 100);
}
console.log(exams_status("78", ""))
//Results:false
