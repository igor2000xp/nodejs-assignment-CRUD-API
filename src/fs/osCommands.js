import * as os from "os";

export const osCommands = (command) => {

  // console.log(command);

  const cpuPrint = () => {
    return os.cpus().map((el) => {
      const b =el.model.split('@');
      return `Model: ${b[0]}, clock rate:${b[1]}`
    });
  }

  switch (command.trim()) {

    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;

    case '--cpus':
      console.log(`Overall amount of CPUS is: ${os.cpus().length}`);
      console.log(cpuPrint());
      break;

    case '--homedir':
      console.log(command);
      console.log(`Home directory is: ${os.homedir()}`);
      break;

    case '--username':
      console.log(os.userInfo().username);
      break;

    case '--architecture':
      console.log(os.arch());
      break;

    default:
      console.log('Invalid input');
      break;
  }
}
