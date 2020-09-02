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
  /** Update an existing document in the collection of 'Question' */
  updateQuestion?: Maybe<Question>;
  /** Delete an existing document in the collection of 'Reading' */
  deleteReading?: Maybe<Reading>;
  /** Update an existing document in the collection of 'Student' */
  updateStudent?: Maybe<Student>;
  /** Create a new document in the collection of 'Student' */
  createStudent: Student;
  /** Delete an existing document in the collection of 'Account' */
  deleteAccount?: Maybe<Account>;
  /** Delete an existing document in the collection of 'Language' */
  deleteLanguage?: Maybe<Language>;
  /** Create a new document in the collection of 'Reading' */
  createReading: Reading;
  /** Create a new document in the collection of 'Question' */
  createQuestion: Question;
  /** Update an existing document in the collection of 'Account' */
  updateAccount?: Maybe<Account>;
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


export type MutationCreateQuestionArgs = {
  data: QuestionInput;
};


export type MutationUpdateAccountArgs = {
  id: Scalars['ID'];
  data: AccountInput;
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

/** Allow manipulating the relationship between the types 'Question' and 'Reading'. */
export type QuestionDiscussion_QuestionsRelation = {
  /** Create one or more documents of type 'Reading' and associate them with the current document. */
  create?: Maybe<Array<Maybe<ReadingInput>>>;
  /** Connect one or more documents of type 'Reading' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Reading' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 'Question' input values */
export type QuestionInput = {
  question: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
  discussion_questions?: Maybe<QuestionDiscussion_QuestionsRelation>;
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
  vocab?: Maybe<ReadingVocabRelation>;
  reading_type: Supported_Readings;
  reading_url?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  teachers?: Maybe<ReadingTeachersRelation>;
  students?: Maybe<ReadingStudentsRelation>;
};

/** Allow manipulating the relationship between the types 'Reading' and 'Student'. */
export type ReadingStudentsRelation = {
  /** Create one or more documents of type 'Student' and associate them with the current document. */
  create?: Maybe<Array<Maybe<StudentInput>>>;
  /** Connect one or more documents of type 'Student' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Student' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Reading' and 'Teacher'. */
export type ReadingTeachersRelation = {
  /** Create one or more documents of type 'Teacher' and associate them with the current document. */
  create?: Maybe<Array<Maybe<TeacherInput>>>;
  /** Connect one or more documents of type 'Teacher' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Teacher' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Reading' and 'Vocabulary'. */
export type ReadingVocabRelation = {
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
};

/** 'Student' input values */
export type StudentInput = {
  account?: Maybe<StudentAccountRelation>;
  readings?: Maybe<StudentReadingsRelation>;
  teachers?: Maybe<StudentTeachersRelation>;
  studies_languages?: Maybe<StudentStudies_LanguagesRelation>;
};

/** Allow manipulating the relationship between the types 'Student' and 'Reading'. */
export type StudentReadingsRelation = {
  /** Create one or more documents of type 'Reading' and associate them with the current document. */
  create?: Maybe<Array<Maybe<ReadingInput>>>;
  /** Connect one or more documents of type 'Reading' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Reading' from the current document using their IDs. */
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
};

/** 'Teacher' input values */
export type TeacherInput = {
  account?: Maybe<TeacherAccountRelation>;
  students?: Maybe<TeacherStudentsRelation>;
  readings?: Maybe<TeacherReadingsRelation>;
  teaches_languages?: Maybe<TeacherTeaches_LanguagesRelation>;
};

/** Allow manipulating the relationship between the types 'Teacher' and 'Reading'. */
export type TeacherReadingsRelation = {
  /** Create one or more documents of type 'Reading' and associate them with the current document. */
  create?: Maybe<Array<Maybe<ReadingInput>>>;
  /** Connect one or more documents of type 'Reading' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Reading' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
export type VocabularyDiscussion_QuestionsRelation = {
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
  discussion_questions?: Maybe<VocabularyDiscussion_QuestionsRelation>;
};

export type Account = {
  __typename?: 'Account';
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
  /** Find a document from the collection of 'Question' by its id. */
  findQuestionByID?: Maybe<Question>;
  /** Find a document from the collection of 'Teacher' by its id. */
  findTeacherByID?: Maybe<Teacher>;
  getLoggedInUser: Account;
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


export type QueryFindQuestionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindTeacherByIdArgs = {
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
  discussion_questions: ReadingPage;
  /** The document's ID. */
  _id: Scalars['ID'];
  answer?: Maybe<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type QuestionDiscussion_QuestionsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
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
  students: StudentPage;
  discussion_questions: QuestionPage;
  /** The document's ID. */
  _id: Scalars['ID'];
  teachers: TeacherPage;
  reading_type: Supported_Readings;
  text: Scalars['String'];
  vocab: VocabularyPage;
  title: Scalars['String'];
  reading_url?: Maybe<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type ReadingStudentsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type ReadingDiscussion_QuestionsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type ReadingTeachersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type ReadingVocabArgs = {
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
  readings: ReadingPage;
  teachers: TeacherPage;
  account: Account;
  studies_languages: LanguagePage;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type StudentReadingsArgs = {
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
  readings: ReadingPage;
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


export type TeacherReadingsArgs = {
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
  discussion_questions: ReadingPage;
  /** The document's ID. */
  _id: Scalars['ID'];
  definition?: Maybe<Scalars['String']>;
  word: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type VocabularyDiscussion_QuestionsArgs = {
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

