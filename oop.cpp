#include <iostream>
#include <string>

using namespace std;

class Teacher {
    private:
        double salary;


    public:
        // properties or attributes
        string name;
        string dept;
        string subj;

        // constructor
        // non parameterized constructor
        // Teacher() {
        //     dept = "Chemistry";
        // }

        // parameterized constructor
        Teacher(string name, string dept, string s, double sal) {
            this->name = name;
            this->dept = dept;
            subj = s;
            salary = sal;
        }

        

        // methods or member function
        void changeDept(string newDept){
            dept = newDept;
        };

        void getTotalInfos () {
            cout << "name " << name << endl;
            cout << "dept " << dept << endl;
            cout << "subj " << subj << endl;
            cout << "salary " << salary << endl;
        }


        // setters
        void setSalary(double s) {
            salary = s;
        };

        // getters
        double getSalary () {
            return salary;
        }

};


class Account {
    private:
        double balance;
        string password;
  
    public:
        string accountId;
        string userName;
};

int main () {


    Teacher t1("khalid", "chemistry", "physical", 25000);

    // copy constructor
    Teacher t2(t1);


    t2.getTotalInfos();


    return 0;
}