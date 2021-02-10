/*
  Implement an alarm clock / timer which will beep after a specified amount of time has passed.
  The user can specify an unlimited number of alarms using command line arguments
*/

let alarmInputs = process.argv.slice(2);

for (let alarmTime of alarmInputs) {
  if (alarmTime !== NaN && alarmTime >= 0) {
  setTimeout(() => {
    process.stdout.write(alarmTime); // logs time instead of beeping sound
    }, alarmTime * 1000);
  }
};
