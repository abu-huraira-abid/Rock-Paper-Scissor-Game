begin.onclick = () => {
  rounds = inputPassword2.value;
  begin.classList.add("visually-hidden");
  inputPassword2.classList.add("visually-hidden");
  SetButtons();
  play(rounds);
};
const SetButtons = () => {
  rock.classList.remove("visually-hidden");
  paper.classList.remove("visually-hidden");
  scissor.classList.remove("visually-hidden");
};
const Number = () => {
  let number;
  number = Math.floor(Math.random() * 3);
  if (number == 0) {
    value = "R";
  } else if (number == 1) {
    value = "P";
  } else {
    value = "S";
  }
  return value;
};
const Match = (value, answer) => {
  if (value === answer) {
    return "Nobody.. Match Tied";
  } else if (value == "P" && answer == "S") {
    return "User";
  } else if (value == "R" && answer == "S") {
    return "CPU";
  } else if (value == "S" && answer == "P") {
    return "CPU";
  } else if (value == "R" && answer == "P") {
    return "User";
  } else if (value == "P" && answer == "R") {
    return "CPU";
  } else if (value == "S" && answer == "R") {
    return "User";
  } else {
    return 0;
  }
};
const CPU = (value) => {
  if (value == "R") {
    return "Rock";
  } else if (value == "S") {
    return "Scissor";
  } else {
    return "Paper";
  }
};

rock.onclick = () => {
  answer = "R";
  value = Number();
  winner = Match(value, answer);
  value = CPU(value);
  answer = CPU(answer);
  ShowResult(value, answer, winner);
  rounds--;
  play(rounds)
};
paper.onclick = () => {
  answer = "P";
  value = Number();
  winner = Match(value, answer);
  value = CPU(value);
  answer = CPU(answer);
  ShowResult(value, answer, winner);
  rounds--;
  play(rounds)
};
scissor.onclick = () => {
  answer = "S";
  value = Number();
  winner = Match(value, answer);
  value = CPU(value);
  answer = CPU(answer);
  ShowResult(value, answer, winner);
  rounds--;
  play(rounds)
};

const ShowResult = (value, answer, winner) => {
  if(winner == "User")
  {
    userCount++;
  }
  if(winner == "CPU")
  {
    CPUCount++;
  }
  result.innerHTML = `CPU : ${value} <br> User : ${answer} <br> Winner : ${winner}`;
};

let value;
let answer;
let winner;
let rounds;
let userCount = 0;
let CPUCount = 0;

const play = (rounds) =>{
  if (rounds != 0) {
    box.innerHTML = `Rounds Left : ${rounds}`;
  }
  if(rounds == 0)
  {
    box.innerHTML = ""
    rock.classList.add("visually-hidden")
    paper.classList.add("visually-hidden")
    scissor.classList.add("visually-hidden")
    end.classList.remove("visually-hidden")
    if (CPUCount > userCount) {
      winner = "CPU"
    }
    else
    if(userCount > CPUCount)
    {
      winner = "User"
    }
    else 
    if(CPUCount == userCount)
    {
      winner = "Match Tie ... "
    }
    else
    {
      winner = "Error"
    }
    result.innerHTML = `<h1>Result : </h1> <br> CPU Wins Rounds : ${CPUCount} <br> User Wins Rounds : ${userCount} <br> Winner : ${winner}`;
  }

}

end.onclick = () =>{
  location.reload()
  rounds = 0;
}