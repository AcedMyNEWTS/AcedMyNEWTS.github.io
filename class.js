class Student {
      constructor(gpa, credits){
          this.gpa = gpa;
          this.credits = credits;
      		}

     get level() {
        if (this.credits > 90) {
          return 'Senior';
        	}
       else if (this.credits <= 90 && this.credits >= 61) {
          return 'Junior';
        	}
       else if (this.credits <= 60 && this.credits >= 31) {
          return 'Sophomore';
        	}
       else (this.credit <=30) {
          return 'Freshman';
        	}


     }

      stringGPA() {
          return this.gpa.toString();
      		}
}

const student = new Student(3.9);
