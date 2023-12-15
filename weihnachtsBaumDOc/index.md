# Tannenbaum Java Program

## Introduction

The Tannenbaum Java program is a console-based application that generates Christmas tree patterns based on user input.
The program prompts the user to enter the height of the tree and select a mode: Upward, Downward, or Full Tannenbaum.
The tree is then displayed according to the chosen mode.

## Features

- **User Input**: The program utilizes the `Scanner` class to accept user input for the height and mode of the Christmas
  tree.

- **Modes**:
    - **Upward (Mode 1)**: Displays an upward-pointing Christmas tree.
    - **Downward (Mode 2)**: Displays a downward-pointing Christmas tree.
    - **Tannenbaum (Mode 3)**: Displays a full Christmas tree.

- **Pattern Generation**: The program uses loops to generate the patterns for each mode, controlling the placement of
  spaces and '*' characters to create the tree shape.

## Usage

1. **Compile**: Compile the program using a Java compiler.

   ```bash
   javac Tannenbaum.java
   ```

2. **Run**: Execute the compiled program.

   ```bash
   java Tannenbaum
   ```

3. **Input**: Enter the height of the tree and choose a mode (1 for Up, 2 for Down, 3 for Tannenbaum) when prompted.

4. **Output**: The program will display the corresponding Christmas tree pattern based on the chosen mode and height.

## Code Overview

### Main Method

The `main` method handles user input and calls the appropriate method based on the selected mode.

```java
public static void main(String[] args) {
    // ... (Input handling)
    if (mode == 1) up(height);
    else if (mode == 2) down(height);
    else if (mode == 3) tannenbaum(height);
    else System.out.println("Falscher Modus");
}
```

### Tannenbaum Method

The `tannenbaum` method generates the Tannenbaum pattern.

```java
public static void tannenbaum(int height) {
    // ... (Pattern generation)
}
```

### Up and Down Methods

The `up` and `down` methods generate the upward and downward tree patterns, respectively.

```java
public static void up(int height) {
    // ... (Pattern generation)
}

public static void down(int height) {
    // ... (Pattern generation)
}
```

## Conclusion

The Tannenbaum Java program provides a simple and interactive way to generate Christmas tree patterns. Users can
customize the height and choose different modes to visualize various tree shapes. The code is well-organized, making it
easy to understand and modify for further customization.

## Pattern Generation Logic

### Tannenbaum Method

The `tannenbaum` method is responsible for generating the Tannenbaum pattern. It utilizes nested loops to control the
placement of spaces and '*' characters. The method dynamically calculates the width of each level and adjusts the
position of the tree top.

```java
public static void tannenbaum(int height) {
    int width = 0;
    // ... (Loop for tree levels)
    for (int i = 0; i < height; i++) {
        // ... (Space generation)
        for (int j = 0; j < width; j++) {
            System.out.print(" ");
        }
        // ... (Character generation)
        for (int j = 0; j < width; j++) {
            System.out.print("*");
        }
        System.out.println();
    }
    // ... (Trunk generation)
}
```

### Up and Down Methods

The `up` and `down` methods are simpler and focus on generating the upward and downward tree patterns, respectively.

```java
public static void up(int height) {
    // ... (Loop for tree levels)
    for (int i = 0; i < height; i++) {
        // ... (Space generation)
        // ... (Character generation)
        System.out.println();
    }
}

public static void down(int height) {
    StringBuilder star = new StringBuilder();
    // ... (Loop for tree levels)
    for (int i = 0; i < height; i++) {
        star.append("*");
        System.out.println(star);
    }
}
```

## Considerations

- **Input Validation**: The program assumes valid input, and additional input validation could be added to handle edge
  cases gracefully.

- **Scalability**: The code can be extended for more complex tree patterns or additional customization options.

- **Trunk Variation**: Currently, the trunk of the Tannenbaum is a simple rectangle. Users might want to explore more
  creative trunk designs.

## Conclusion

The Tannenbaum Java program provides a foundation for generating Christmas tree patterns with different modes.
Developers can further enhance the program by adding features, improving input validation, or creating more intricate
tree designs. This project serves as an educational and entertaining example of Java console-based programming.