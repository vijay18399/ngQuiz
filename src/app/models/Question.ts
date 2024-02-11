export interface Question {
  answerOption?: number; // User-selected option
  selectedOption?: number; // Friend-selected option
  question: string;
  options: Option[];
  id: number,
  displayText?:string,
}

export interface Option {
  id: number,
  name: string;
  image?: string;
}

// src/app/models/Attempt.ts
export interface Attempt {
  userFullName: string;
  answers: Answer[];
  score?: number;
  id:string;
  createdAt:Date;
}
export interface Answer {
  questionId: number;
  selectedOption: any;
}


// src/app/models/Quiz.ts
export interface Quiz {
  id?:string;
  showDetails?: boolean;
  quizId: string;
  title: string;
  questions: Question[];
  attempts?: Attempt[];
}
