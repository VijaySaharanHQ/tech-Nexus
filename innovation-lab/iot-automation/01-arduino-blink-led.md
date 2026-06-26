# 💡 How to Blink an LED (The "Hello World" of Hardware)

Welcome to the physical world! If you want to build smart home devices, robots, or automated sensors, you have to start here. 

In this project, we are going to write code on our computer, send it to a micro-controller (the Arduino), and make a physical LED flash on and off.

---

## 🧰 Hardware Requirements
Before writing any code, you will need to gather these physical components:
* **1x Arduino Uno R3** (The brain)
* **1x USB Cable** (To connect the Arduino to your computer)
* **1x 5mm LED** (Any color)
* **1x 220-ohm Resistor** (To prevent the LED from drawing too much power and popping)
* **1x Breadboard** (For plugging in wires without soldering)
* **2x Jumper Wires** (Male-to-Male)

---

## 🔌 Wiring Guide

*Warning: Always unplug your Arduino from your computer before wiring components!*

1. **The Ground:** Connect a black jumper wire from the **GND** (Ground) pin on the Arduino to the negative (-) rail on your breadboard.
2. **The Resistor:** Place one end of the 220-ohm resistor in the negative rail, and the other end in a blank row on the breadboard.
3. **The LED:** The LED has two legs. The shorter leg is the negative side (Cathode), and the longer leg is the positive side (Anode). 
   * Plug the **short leg** into the same row as your resistor.
   * Plug the **long leg** into a new, blank row.
4. **The Power:** Connect a colored jumper wire from **Digital Pin 13** on your Arduino to the row containing the long leg of the LED.

---

## 💻 The Code (Arduino Sketch)

Now, plug your Arduino into your computer via USB, open the [Arduino IDE](https://www.arduino.cc/en/software), and paste in this code. 

```cpp
// This setup function runs exactly one time when you power on the board.
void setup() {
  // We need to tell the Arduino that Pin 13 is going to push power OUT.
  pinMode(13, OUTPUT);
}

// This loop function runs over and over again forever.
void loop() {
  digitalWrite(13, HIGH);  // HIGH sends 5 volts to Pin 13, turning the LED ON.
  delay(1000);             // Wait for 1000 milliseconds (1 second).
  
  digitalWrite(13, LOW);   // LOW cuts the power to Pin 13, turning the LED OFF.
  delay(1000);             // Wait for another 1 second.
}
