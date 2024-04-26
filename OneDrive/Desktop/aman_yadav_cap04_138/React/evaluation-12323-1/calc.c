#include <stdio.h>

int main() {
    char operation;
    double a, b, result;

    printf("Enter an operator (+, -, *, /) which operation you wants to preform: ");
    scanf("%c", &operation);
    printf("Enter first numbers: ");
    scanf("%lf", &a);
     printf("Enter second numbers: ");
    scanf("%lf", &b);

    if (operation == '+') {
        result = a + b;
        printf("%.2lf + %.2lf = %.2lf\n", a, b, result);
    } else if (operation == '-') {
        result = a - b;
        printf("%.2lf - %.2lf = %.2lf\n", a, b, result);
    } else if (operation == '*') {
        result = a * b;
        printf("%.2lf * %.2lf = %.2lf\n", a, b, result);
    } else if (operation == '/') {
        if (b == 0) {
            printf("Divide by zero is not possible\n");
        } else {
            result = a / b;
            printf("%.2lf / %.2lf = %.2lf\n", a, b, result);
        }
    } else {
        printf("Please enter valid operator like that(+,-,*,/)\n");
    }

    return 0;
}
