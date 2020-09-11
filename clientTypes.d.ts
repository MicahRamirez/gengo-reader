import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

/** 'Account' input values */
export type AccountInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  teacher?: Maybe<AccountTeacherRelation>;
  student?: Maybe<AccountStudentRelation>;
};

/** Allow manipulating the relationship between the types 'Account' and 'Student' using the field 'Account.student'. */
export type AccountStudentRelation = {
  /** Create a document of type 'Student' and associate it with the current document. */
  create?: Maybe<StudentInput>;
  /** Connect a document of type 'Student' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Account' and 'Teacher' using the field 'Account.teacher'. */
export type AccountTeacherRelation = {
  /** Create a document of type 'Teacher' and associate it with the current document. */
  create?: Maybe<TeacherInput>;
  /** Connect a document of type 'Teacher' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};


/** 'Language' input values */
export type LanguageInput = {
  code: Supported_Language_Code;
  display_string: Scalars['String'];
  students?: Maybe<LanguageStudentsRelation>;
  teachers?: Maybe<LanguageTeachersRelation>;
};

/** Allow manipulating the relationship between the types 'Language' and 'Student'. */
export type LanguageStudentsRelation = {
  /** Create one or more documents of type 'Student' and associate them with the current document. */
  create?: Maybe<Array<Maybe<StudentInput>>>;
  /** Connect one or more documents of type 'Student' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Student' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Language' and 'Teacher'. */
export type LanguageTeachersRelation = {
  /** Create one or more documents of type 'Teacher' and associate them with the current document. */
  create?: Maybe<Array<Maybe<TeacherInput>>>;
  /** Connect one or more documents of type 'Teacher' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Teacher' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Account;
  /** Create a new document in the collection of 'Language' */
  createLanguage: Language;
  /** Update an existing document in the collection of 'Reading' */
  updateReading?: Maybe<Reading>;
  /** Create a new document in the collection of 'Vocabulary' */
  createVocabulary: Vocabulary;
  /** Update an existing document in the collection of 'Vocabulary' */
  updateVocabulary?: Maybe<Vocabulary>;
  /** Update an existing document in the collection of 'ReadingSession' */
  updateReadingSession?: Maybe<ReadingSession>;
  /** Update an existing document in the collection of 'Question' */
  updateQuestion?: Maybe<Question>;
  /** Delete an existing document in the collection of 'Reading' */
  deleteReading?: Maybe<Reading>;
  /** Update an existing document in the collection of 'Student' */
  updateStudent?: Maybe<Student>;
  /** Create a new document in the collection of 'StudentAnswer' */
  createStudentAnswer: StudentAnswer;
  /** Create a new document in the collection of 'ReadingSession' */
  createReadingSession: ReadingSession;
  /** Update an existing document in the collection of 'StudentAnswer' */
  updateStudentAnswer?: Maybe<StudentAnswer>;
  /** Create a new document in the collection of 'Student' */
  createStudent: Student;
  /** Delete an existing document in the collection of 'Account' */
  deleteAccount?: Maybe<Account>;
  /** Delete an existing document in the collection of 'Language' */
  deleteLanguage?: Maybe<Language>;
  /** Create a new document in the collection of 'Reading' */
  createReading: Reading;
  /** Delete an existing document in the collection of 'StudentAnswer' */
  deleteStudentAnswer?: Maybe<StudentAnswer>;
  /** Create a new document in the collection of 'Question' */
  createQuestion: Question;
  /** Update an existing document in the collection of 'Account' */
  updateAccount?: Maybe<Account>;
  /** Delete an existing document in the collection of 'ReadingSession' */
  deleteReadingSession?: Maybe<ReadingSession>;
  /** Delete an existing document in the collection of 'Vocabulary' */
  deleteVocabulary?: Maybe<Vocabulary>;
  /** Create a new document in the collection of 'Teacher' */
  createTeacher: Teacher;
  /** Create a new document in the collection of 'Account' */
  createAccount: Account;
  login: Scalars['String'];
  /** Delete an existing document in the collection of 'Student' */
  deleteStudent?: Maybe<Student>;
  /** Update an existing document in the collection of 'Language' */
  updateLanguage?: Maybe<Language>;
  /** Delete an existing document in the collection of 'Question' */
  deleteQuestion?: Maybe<Question>;
  /** Update an existing document in the collection of 'Teacher' */
  updateTeacher?: Maybe<Teacher>;
  /** Delete an existing document in the collection of 'Teacher' */
  deleteTeacher?: Maybe<Teacher>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationCreateLanguageArgs = {
  data: LanguageInput;
};


export type MutationUpdateReadingArgs = {
  id: Scalars['ID'];
  data: ReadingInput;
};


export type MutationCreateVocabularyArgs = {
  data: VocabularyInput;
};


export type MutationUpdateVocabularyArgs = {
  id: Scalars['ID'];
  data: VocabularyInput;
};


export type MutationUpdateReadingSessionArgs = {
  id: Scalars['ID'];
  data: ReadingSessionInput;
};


export type MutationUpdateQuestionArgs = {
  id: Scalars['ID'];
  data: QuestionInput;
};


export type MutationDeleteReadingArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateStudentArgs = {
  id: Scalars['ID'];
  data: StudentInput;
};


export type MutationCreateStudentAnswerArgs = {
  data: StudentAnswerInput;
};


export type MutationCreateReadingSessionArgs = {
  data: ReadingSessionInput;
};


export type MutationUpdateStudentAnswerArgs = {
  id: Scalars['ID'];
  data: StudentAnswerInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLanguageArgs = {
  id: Scalars['ID'];
};


export type MutationCreateReadingArgs = {
  data: ReadingInput;
};


export type MutationDeleteStudentAnswerArgs = {
  id: Scalars['ID'];
};


export type MutationCreateQuestionArgs = {
  data: QuestionInput;
};


export type MutationUpdateAccountArgs = {
  id: Scalars['ID'];
  data: AccountInput;
};


export type MutationDeleteReadingSessionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVocabularyArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTeacherArgs = {
  data: TeacherInput;
};


export type MutationCreateAccountArgs = {
  data: AccountInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateLanguageArgs = {
  id: Scalars['ID'];
  data: LanguageInput;
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateTeacherArgs = {
  id: Scalars['ID'];
  data: TeacherInput;
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['ID'];
};

/** Allow manipulating the relationship between the types 'Question' and 'Reading' using the field 'Question.associated_reading'. */
export type QuestionAssociated_ReadingRelation = {
  /** Create a document of type 'Reading' and associate it with the current document. */
  create?: Maybe<ReadingInput>;
  /** Connect a document of type 'Reading' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Question' input values */
export type QuestionInput = {
  question: Scalars['String'];
  answer: Scalars['String'];
  associated_reading?: Maybe<QuestionAssociated_ReadingRelation>;
  student_answers: Array<Maybe<Scalars['ID']>>;
};

/** Allow manipulating the relationship between the types 'Reading' and 'Teacher' using the field 'Reading.created_by'. */
export type ReadingCreated_ByRelation = {
  /** Create a document of type 'Teacher' and associate it with the current document. */
  create?: Maybe<TeacherInput>;
  /** Connect a document of type 'Teacher' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Teacher' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Reading' and 'Question'. */
export type ReadingDiscussion_QuestionsRelation = {
  /** Create one or more documents of type 'Question' and associate them with the current document. */
  create?: Maybe<Array<Maybe<QuestionInput>>>;
  /** Connect one or more documents of type 'Question' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Question' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 'Reading' input values */
export type ReadingInput = {
  discussion_questions?: Maybe<ReadingDiscussion_QuestionsRelation>;
  vocabulary?: Maybe<ReadingVocabularyRelation>;
  reading_type: Supported_Readings;
  reading_url?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  created_by?: Maybe<ReadingCreated_ByRelation>;
};

/** 'ReadingSession' input values */
export type ReadingSessionInput = {
  reading?: Maybe<ReadingSessionReadingRelation>;
  teacher?: Maybe<ReadingSessionTeacherRelation>;
  student?: Maybe<ReadingSessionStudentRelation>;
};

/** Allow manipulating the relationship between the types 'ReadingSession' and 'Reading' using the field 'ReadingSession.reading'. */
export type ReadingSessionReadingRelation = {
  /** Create a document of type 'Reading' and associate it with the current document. */
  create?: Maybe<ReadingInput>;
  /** Connect a document of type 'Reading' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'ReadingSession' and 'Student' using the field 'ReadingSession.student'. */
export type ReadingSessionStudentRelation = {
  /** Create a document of type 'Student' and associate it with the current document. */
  create?: Maybe<StudentInput>;
  /** Connect a document of type 'Student' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Student' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'ReadingSession' and 'Teacher' using the field 'ReadingSession.teacher'. */
export type ReadingSessionTeacherRelation = {
  /** Create a document of type 'Teacher' and associate it with the current document. */
  create?: Maybe<TeacherInput>;
  /** Connect a document of type 'Teacher' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Reading' and 'Vocabulary'. */
export type ReadingVocabularyRelation = {
  /** Create one or more documents of type 'Vocabulary' and associate them with the current document. */
  create?: Maybe<Array<Maybe<VocabularyInput>>>;
  /** Connect one or more documents of type 'Vocabulary' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Vocabulary' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Student' and 'Account' using the field 'Student.account'. */
export type StudentAccountRelation = {
  /** Create a document of type 'Account' and associate it with the current document. */
  create?: Maybe<AccountInput>;
  /** Connect a document of type 'Account' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Account' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'StudentAnswer' and 'Student' using the field 'StudentAnswer.answered_by'. */
export type StudentAnswerAnswered_ByRelation = {
  /** Create a document of type 'Student' and associate it with the current document. */
  create?: Maybe<StudentInput>;
  /** Connect a document of type 'Student' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Student' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** 'StudentAnswer' input values */
export type StudentAnswerInput = {
  answered_by?: Maybe<StudentAnswerAnswered_ByRelation>;
  answer?: Maybe<Scalars['String']>;
  question?: Maybe<StudentAnswerQuestionRelation>;
};

/** Allow manipulating the relationship between the types 'StudentAnswer' and 'Question' using the field 'StudentAnswer.question'. */
export type StudentAnswerQuestionRelation = {
  /** Create a document of type 'Question' and associate it with the current document. */
  create?: Maybe<QuestionInput>;
  /** Connect a document of type 'Question' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Student' input values */
export type StudentInput = {
  account?: Maybe<StudentAccountRelation>;
  reading_sessions?: Maybe<StudentReading_SessionsRelation>;
  teachers?: Maybe<StudentTeachersRelation>;
  studies_languages?: Maybe<StudentStudies_LanguagesRelation>;
};

/** Allow manipulating the relationship between the types 'Student' and 'ReadingSession'. */
export type StudentReading_SessionsRelation = {
  /** Create one or more documents of type 'ReadingSession' and associate them with the current document. */
  create?: Maybe<Array<Maybe<ReadingSessionInput>>>;
  /** Connect one or more documents of type 'ReadingSession' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'ReadingSession' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Student' and 'Language'. */
export type StudentStudies_LanguagesRelation = {
  /** Create one or more documents of type 'Language' and associate them with the current document. */
  create?: Maybe<Array<Maybe<LanguageInput>>>;
  /** Connect one or more documents of type 'Language' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Language' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Student' and 'Teacher'. */
export type StudentTeachersRelation = {
  /** Create one or more documents of type 'Teacher' and associate them with the current document. */
  create?: Maybe<Array<Maybe<TeacherInput>>>;
  /** Connect one or more documents of type 'Teacher' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Teacher' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Teacher' and 'Account' using the field 'Teacher.account'. */
export type TeacherAccountRelation = {
  /** Create a document of type 'Account' and associate it with the current document. */
  create?: Maybe<AccountInput>;
  /** Connect a document of type 'Account' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Account' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** 'Teacher' input values */
export type TeacherInput = {
  account?: Maybe<TeacherAccountRelation>;
  students?: Maybe<TeacherStudentsRelation>;
  reading_sessions: Array<Maybe<Scalars['ID']>>;
  teaches_languages?: Maybe<TeacherTeaches_LanguagesRelation>;
};

/** Allow manipulating the relationship between the types 'Teacher' and 'Student'. */
export type TeacherStudentsRelation = {
  /** Create one or more documents of type 'Student' and associate them with the current document. */
  create?: Maybe<Array<Maybe<StudentInput>>>;
  /** Connect one or more documents of type 'Student' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Student' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Teacher' and 'Language'. */
export type TeacherTeaches_LanguagesRelation = {
  /** Create one or more documents of type 'Language' and associate them with the current document. */
  create?: Maybe<Array<Maybe<LanguageInput>>>;
  /** Connect one or more documents of type 'Language' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Language' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/** Allow manipulating the relationship between the types 'Vocabulary' and 'Reading'. */
export type VocabularyAppears_InRelation = {
  /** Create one or more documents of type 'Reading' and associate them with the current document. */
  create?: Maybe<Array<Maybe<ReadingInput>>>;
  /** Connect one or more documents of type 'Reading' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Reading' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 'Vocabulary' input values */
export type VocabularyInput = {
  word: Scalars['String'];
  definition?: Maybe<Scalars['String']>;
  appears_in?: Maybe<VocabularyAppears_InRelation>;
};

export type Account = {
  __typename?: 'Account';
  student?: Maybe<Student>;
  teacher?: Maybe<Teacher>;
  email: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type Language = {
  __typename?: 'Language';
  students: StudentPage;
  /** The document's ID. */
  _id: Scalars['ID'];
  teachers: TeacherPage;
  code: Supported_Language_Code;
  display_string: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type LanguageStudentsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type LanguageTeachersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Language'. */
export type LanguagePage = {
  __typename?: 'LanguagePage';
  /** The elements of type 'Language' in this page. */
  data: Array<Maybe<Language>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Language' by its id. */
  findLanguageByID?: Maybe<Language>;
  /** Find a document from the collection of 'Student' by its id. */
  findStudentByID?: Maybe<Student>;
  /** Find a document from the collection of 'ReadingSession' by its id. */
  findReadingSessionByID?: Maybe<ReadingSession>;
  /** Find a document from the collection of 'Question' by its id. */
  findQuestionByID?: Maybe<Question>;
  /** Find a document from the collection of 'Teacher' by its id. */
  findTeacherByID?: Maybe<Teacher>;
  getLoggedInUser: Account;
  /** Find a document from the collection of 'StudentAnswer' by its id. */
  findStudentAnswerByID?: Maybe<StudentAnswer>;
  /** Find a document from the collection of 'Reading' by its id. */
  findReadingByID?: Maybe<Reading>;
  /** Find a document from the collection of 'Vocabulary' by its id. */
  findVocabularyByID?: Maybe<Vocabulary>;
  /** Find a document from the collection of 'Account' by its id. */
  findAccountByID?: Maybe<Account>;
};


export type QueryFindLanguageByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindStudentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindReadingSessionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindQuestionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindTeacherByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindStudentAnswerByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindReadingByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindVocabularyByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAccountByIdArgs = {
  id: Scalars['ID'];
};

export type Question = {
  __typename?: 'Question';
  question: Scalars['String'];
  associated_reading: Reading;
  /** The document's ID. */
  _id: Scalars['ID'];
  answer: Scalars['String'];
  student_answers: Array<Maybe<StudentAnswer>>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Question'. */
export type QuestionPage = {
  __typename?: 'QuestionPage';
  /** The elements of type 'Question' in this page. */
  data: Array<Maybe<Question>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Reading = {
  __typename?: 'Reading';
  created_by?: Maybe<Teacher>;
  discussion_questions: QuestionPage;
  /** The document's ID. */
  _id: Scalars['ID'];
  vocabulary: VocabularyPage;
  reading_type: Supported_Readings;
  text: Scalars['String'];
  title: Scalars['String'];
  reading_url?: Maybe<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type ReadingDiscussion_QuestionsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type ReadingVocabularyArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Reading'. */
export type ReadingPage = {
  __typename?: 'ReadingPage';
  /** The elements of type 'Reading' in this page. */
  data: Array<Maybe<Reading>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type ReadingSession = {
  __typename?: 'ReadingSession';
  student?: Maybe<Student>;
  teacher: Teacher;
  /** The document's ID. */
  _id: Scalars['ID'];
  reading: Reading;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'ReadingSession'. */
export type ReadingSessionPage = {
  __typename?: 'ReadingSessionPage';
  /** The elements of type 'ReadingSession' in this page. */
  data: Array<Maybe<ReadingSession>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export enum Supported_Language_Code {
  Ja = 'JA'
}

export enum Supported_Readings {
  NhkNewsWebEasy = 'NHK_NEWS_WEB_EASY',
  UserCreated = 'USER_CREATED'
}

export type Student = {
  __typename?: 'Student';
  /** The document's ID. */
  _id: Scalars['ID'];
  reading_sessions: ReadingSessionPage;
  teachers: TeacherPage;
  account: Account;
  studies_languages: LanguagePage;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type StudentReading_SessionsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type StudentTeachersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type StudentStudies_LanguagesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type StudentAnswer = {
  __typename?: 'StudentAnswer';
  question: Question;
  /** The document's ID. */
  _id: Scalars['ID'];
  answer?: Maybe<Scalars['String']>;
  answered_by?: Maybe<Student>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Student'. */
export type StudentPage = {
  __typename?: 'StudentPage';
  /** The elements of type 'Student' in this page. */
  data: Array<Maybe<Student>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Teacher = {
  __typename?: 'Teacher';
  teaches_languages: LanguagePage;
  students: StudentPage;
  /** The document's ID. */
  _id: Scalars['ID'];
  reading_sessions: Array<Maybe<ReadingSession>>;
  account: Account;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type TeacherTeaches_LanguagesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type TeacherStudentsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Teacher'. */
export type TeacherPage = {
  __typename?: 'TeacherPage';
  /** The elements of type 'Teacher' in this page. */
  data: Array<Maybe<Teacher>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Vocabulary = {
  __typename?: 'Vocabulary';
  /** The document's ID. */
  _id: Scalars['ID'];
  appears_in: ReadingPage;
  definition?: Maybe<Scalars['String']>;
  word: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type VocabularyAppears_InArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Vocabulary'. */
export type VocabularyPage = {
  __typename?: 'VocabularyPage';
  /** The elements of type 'Vocabulary' in this page. */
  data: Array<Maybe<Vocabulary>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};


export type DoLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type DoLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type DoRegistrationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type DoRegistrationMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'Account' }
    & Pick<Account, 'email'>
  ) }
);

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getLoggedInUser: (
    { __typename?: 'Account' }
    & Pick<Account, 'email' | '_id' | 'firstName' | 'lastName'>
    & { student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, '_id'>
    )>, teacher?: Maybe<(
      { __typename?: 'Teacher' }
      & Pick<Teacher, '_id'>
    )> }
  ) }
);


export const DoLoginDocument = gql`
    mutation doLogin($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type DoLoginMutationFn = Apollo.MutationFunction<DoLoginMutation, DoLoginMutationVariables>;

/**
 * __useDoLoginMutation__
 *
 * To run a mutation, you first call `useDoLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doLoginMutation, { data, loading, error }] = useDoLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useDoLoginMutation(baseOptions?: Apollo.MutationHookOptions<DoLoginMutation, DoLoginMutationVariables>) {
        return Apollo.useMutation<DoLoginMutation, DoLoginMutationVariables>(DoLoginDocument, baseOptions);
      }
export type DoLoginMutationHookResult = ReturnType<typeof useDoLoginMutation>;
export type DoLoginMutationResult = Apollo.MutationResult<DoLoginMutation>;
export type DoLoginMutationOptions = Apollo.BaseMutationOptions<DoLoginMutation, DoLoginMutationVariables>;
export const DoRegistrationDocument = gql`
    mutation doRegistration($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  register(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
    email
  }
}
    `;
export type DoRegistrationMutationFn = Apollo.MutationFunction<DoRegistrationMutation, DoRegistrationMutationVariables>;

/**
 * __useDoRegistrationMutation__
 *
 * To run a mutation, you first call `useDoRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doRegistrationMutation, { data, loading, error }] = useDoRegistrationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useDoRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<DoRegistrationMutation, DoRegistrationMutationVariables>) {
        return Apollo.useMutation<DoRegistrationMutation, DoRegistrationMutationVariables>(DoRegistrationDocument, baseOptions);
      }
export type DoRegistrationMutationHookResult = ReturnType<typeof useDoRegistrationMutation>;
export type DoRegistrationMutationResult = Apollo.MutationResult<DoRegistrationMutation>;
export type DoRegistrationMutationOptions = Apollo.BaseMutationOptions<DoRegistrationMutation, DoRegistrationMutationVariables>;
export const GetUserDocument = gql`
    query getUser {
  getLoggedInUser {
    email
    _id
    firstName
    lastName
    student {
      _id
    }
    teacher {
      _id
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;