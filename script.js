let counter = 0;
while (true) {
  const userRequest = prompt('Enter one of these: go, break, continue');
  if (userRequest === 'break') {
    break
  } else if (userRequest === 'continue') {
    counter++;
    continue
  } else {
    counter++;
    alert(`This is the your counter: ${counter}`);
  }
}