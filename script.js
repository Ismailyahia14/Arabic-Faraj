// قاعدة بيانات الأسئلة للغة العربية
const quizQuestions = [
    {
        id: 1,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'أعلن العرب عن رفضهم تهجير الفلسطينيين',
            'أعلن العرب رفضِهم تهجير الفلسطينيين',
            'أعلن العرب رفضهم تهجير الفلسطينيون',
            'أعلن العرب رفضَهم تهجير الفلسطينيين'
        ],
        answer: 'أعلن العرب رفضَهم تهجير الفلسطينيين',
        explanation: 'الإعراب الصحيح: "رفضَهم" مفعول به منصوب بالفتحة، و"هم" ضمير متصل مبني في محل جر مضاف إليه'
    },
    {
        id: 2,
        type: 'multiple',
        question: 'في لغة الإعلام:',
        options: [
            'يجوز الفصل بين المتضايفين',
            'يجب الفصل بين المتضايفين',
            'لا يجوز الفصل بين المتضايفين',
            'لا يجب الفصل بين المتضايفين'
        ],
        answer: 'يجب الفصل بين المتضايفين',
        explanation: 'في لغة الإعلام المعاصرة، يجب الفصل بين المضاف والمضاف إليه للتوضيح'
    },
    {
        id: 3,
        type: 'multiple',
        question: 'عدد التوابع في النحو هو:',
        options: [
            'ثلاثة',
            'اثنان',
            'أربعة',
            'خمسة'
        ],
        answer: 'خمسة',
        explanation: 'التوابع خمسة: النعت، البدل، التوكيد، العطف، التوكيد اللفظي والمعنوي'
    },
    {
        id: 4,
        type: 'multiple',
        question: 'أخطأ العلماء القدامى حين قالوا:',
        options: [
            'أن الأجوف من أقسام الفعل المعتل',
            'أن الناقص من أقسام الفعل المعتل',
            'أن المثال من أقسام الفعل المعتل',
            'أن اللفيف من أقسام الفعل المعتل'
        ],
        answer: 'أن المثال من أقسام الفعل المعتل',
        explanation: 'الفعل المثال ليس من أقسام الفعل المعتل، فالاعتدال هو اتصال الفعل بحرف علة'
    },
    {
        id: 5,
        type: 'multiple',
        question: 'الصواب هو (الطالبات...):',
        options: [
            'قرين ونجحين',
            'درسَن ونجحَن',
            'قرأن ونجحين',
            'قرأن ودرسْن ونجحْن'
        ],
        answer: 'قرأن ودرسْن ونجحْن',
        explanation: 'تصريف الأفعال للجمع المؤنث: قرأْنَ، درسنَ، نجحنَ'
    },
    {
        id: 6,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'كان العرب أعزاء لا أذلاء',
            'ما كان العرب أذلاء لا أعزاء',
            'كان العرب أذلاء لكن أعزاء',
            'ما كان العرب أعزاء لا أذلاء'
        ],
        answer: 'كان العرب أعزاء لا أذلاء',
        explanation: 'أسلوب المقابلة الصحيح: أعزاء لا أذلاء'
    },
    {
        id: 7,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'عائشة بنت أبي بكر وصوت أبي بكر',
            'عائشة بنت أبو بكر وصوت أبو بكر',
            'عائشة بنت أبا بكر وصوت أبو بكر',
            'عائشة بنت أبي بكر وصوت أبو بكر'
        ],
        answer: 'عائشة بنت أبي بكر وصوت أبو بكر',
        explanation: '"بنت أبي بكر" لأن أبي مضاف إليه مجرور، "صوت أبو بكر" لأن أبو بدل من صوت مرفوع'
    },
    {
        id: 8,
        type: 'multiple',
        question: 'القول بأن "بدل الغلط" من أنواع البدل هو:',
        options: [
            'قول صحيح',
            'قول ضعيف',
            'قول خاطئ مرفوض',
            'قول مقبول محتمل'
        ],
        answer: 'قول خاطئ مرفوض',
        explanation: 'لا يوجد في النحو العربي ما يسمى "بدل الغلط"'
    },
    {
        id: 9,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'أن النعت هو الوصف',
            'أن الوصف ليس النعت',
            'أن النعت يشبه الوصف',
            'أن النعت ليس الوصف'
        ],
        answer: 'أن النعت هو الوصف',
        explanation: 'النعت في اللغة العربية هو الوصف'
    },
    {
        id: 10,
        type: 'multiple',
        question: 'فاء ولام وعين الكلمة هي بالترتيب:',
        options: [
            'الأول والأخير والوسط',
            'الأول والوسط والأخير',
            'الأخير والأول والوسط',
            'الأخير والوسط والأول'
        ],
        answer: 'الأول والأخير والوسط',
        explanation: 'في الصرف العربي: الفاء = الحرف الأول، العين = الحرف الثاني، اللام = الحرف الثالث'
    },
    {
        id: 11,
        type: 'multiple',
        question: 'الـ DIPHTONGE هو ما سماه علماء التجويد:',
        options: [
            'حرف المد',
            'حرف العلة',
            'حرف اللين',
            'حرف العطف'
        ],
        answer: 'حرف اللين',
        explanation: 'الديفثونج في اللغات الأجنبية يقابل حرف اللين في التجويد العربي'
    },
    {
        id: 12,
        type: 'multiple',
        question: 'يشترط في الحرف المعتل:',
        options: [
            'ألا يكون الأول',
            'ألا يكون الأخير',
            'ألا يكون الوسط',
            'ألا يكون ساكنا'
        ],
        answer: 'ألا يكون الأول',
        explanation: 'الحرف المعتل يجب ألا يكون في أول الكلمة'
    },
    {
        id: 13,
        type: 'multiple',
        question: 'معنى "ضاع يضوع" هو:',
        options: [
            'تاه يتوه',
            'فاح يفوح',
            'سار يسير',
            'قام يقوم'
        ],
        answer: 'فاح يفوح',
        explanation: 'ضاع يضوع تعني فاح يفوح أو انتشر'
    },
    {
        id: 14,
        type: 'multiple',
        question: 'الصواب هو: حين هاجمنا العدو كنا:',
        options: [
            'مستعدون له',
            'مستعدان له',
            'قد استعدينا له',
            'قد استعددنا له'
        ],
        answer: 'قد استعددنا له',
        explanation: 'الفعل "استعددنا" هو الصواب لأنه فعل ماض ناقص'
    },
    {
        id: 15,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'سلمت على هذين الرجلين',
            'سلمت على هذين الرجلان',
            'سلمت على هذان الرجلين',
            'سلمت على هذان الرجلان'
        ],
        answer: 'سلمت على هذين الرجلين',
        explanation: '"هذين" اسم إشارة للمثنى مجرور بالياء، و"الرجلين" مضاف إليه مجرور'
    },
    {
        id: 16,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'نجح الطالبان نفساهما',
            'نجح الطالبين أنفسهما',
            'نجح الطالبان أنفسهما',
            'نجح الطالبين نفسيها'
        ],
        answer: 'نجح الطالبان أنفسهما',
        explanation: '"الطالبان" مبتدأ مرفوع بالألف، و"أنفسهما" توكيد مرفوع'
    },
    {
        id: 17,
        type: 'multiple',
        question: 'إذا كان الحرف الأخير هو الألف فإن:',
        options: [
            'الحرف قبل الضمير يكسر',
            'الحرف قبل الضمير يشدد',
            'الحرف قبل الضمير يضم',
            'الحرف قبل الضمير يبقى مفتوحا لأن الألف لا تتأثر'
        ],
        answer: 'الحرف قبل الضمير يبقى مفتوحا لأن الألف لا تتأثر',
        explanation: 'الألف حرف مد لا يتأثر بالحركات فلا يغير ما قبله'
    },
    {
        id: 18,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'خرجت وفي الوقت نفسه نزل المطر',
            'خرجت وفي نفس الوقت نزل المطر',
            'خرجتو وفي نفس الوقت نزل المطر',
            'خرجتْ أنا وفي نفس الوقت نزل المطر'
        ],
        answer: 'خرجت وفي نفس الوقت نزل المطر',
        explanation: 'هذا هو التعبير الصحيح والأكثر شيوعاً'
    },
    {
        id: 19,
        type: 'multiple',
        question: 'الصواب هو:',
        options: [
            'ابقُوا معنا',
            'ابقَوا معنا',
            'ابقيوا معنا',
            'ابقوا معنا'
        ],
        answer: 'ابقَوا معنا',
        explanation: 'فعل الأمر من "بَقِيَ" للمخاطبين هو "ابقَوا" بالفتح'
    },
    {
        id: 20,
        type: 'multiple',
        question: 'إعراب "نفخة" في قوله تعالى {فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَة} هو:',
        options: [
            'مفعول مطلق مرفوع',
            'مفعول مطلق منصوب',
            'توكيد مرفوع',
            'نائب فاعل مرفوع'
        ],
        answer: 'نائب فاعل مرفوع',
        explanation: '"نفخة" نائب فاعل للفعل المبني للمجهول "نُفِخَ"'
    },
    {
        id: 21,
        type: 'truefalse',
        question: 'إذا لم تظهر الياء في المضارع فإن أصل الألف واوي',
        answer: 'خطأ',
        explanation: 'خطأ، إذا لم تظهر الياء في المضارع فالأصل أنها يائية'
    },
    {
        id: 22,
        type: 'truefalse',
        question: 'الفعل المثال (الذي يبدأ بياء أو واو) من أقسام الأفعال المعتلة',
        answer: 'خطأ',
        explanation: 'خطأ، الفعل المثال ليس من المعتل، المعتل هو ما كان به حرف علة'
    },
    {
        id: 23,
        type: 'truefalse',
        question: 'جملة "سلمت على كلي الصديقين" صحيحة',
        answer: 'خطأ',
        explanation: 'خطأ، الصواب: "سلمت على كلا الصديقين" أو "كل الصديقين"'
    },
    {
        id: 24,
        type: 'truefalse',
        question: '"ذان وتان" يعربان بالحركات الأصلية: الضمة والفتحة والكسرة',
        answer: 'خطأ',
        explanation: 'خطأ، "ذان وتان" يعربان بالألف رفعاً والياء نصباً وجراً'
    },
    {
        id: 25,
        type: 'truefalse',
        question: '"أل" التي تدخل أسماء الأعلام عهدية',
        answer: 'خطأ',
        explanation: 'خطأ، "أل" في أسماء الأعلام جنسية وليست عهدية'
    },
    {
        id: 26,
        type: 'truefalse',
        question: '"الذين" تدل على المثنى',
        answer: 'خطأ',
        explanation: 'خطأ، "الذين" للجمع المذكر العاقل، والمثنى له "اللذان/اللذين"'
    },
    {
        id: 27,
        type: 'truefalse',
        question: '"رِمنا" تعني أردنا',
        answer: 'خطأ',
        explanation: 'خطأ، "رِمنا" من الرمي وليس من الإرادة'
    },
    {
        id: 28,
        type: 'truefalse',
        question: '"حاك يحوك" تعني تردد',
        answer: 'خطأ',
        explanation: 'خطأ، "حاك يحوك" تعني نسج أو صنع'
    },
    {
        id: 29,
        type: 'truefalse',
        question: 'جملة "قرأت المقالين اللذان في الفيس" صحيحة',
        answer: 'خطأ',
        explanation: 'خطأ، الصواب: "قرأت المقالين اللذين في الفيس" لأن "اللذين" اسم موصول للمثنى'
    },
    {
        id: 30,
        type: 'truefalse',
        question: 'التوابع ثلاثة فقط',
        answer: 'خطأ',
        explanation: 'خطأ، التوابع خمسة كما ذكر في السؤال الثالث'
    }
];

// ثوابت التطبيق
const TOTAL_QUESTIONS = 30;
const EXAM_TIME = 60 * 60; // 60 دقيقة بالثواني

// متغيرات التطبيق
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;
let timeLeft = EXAM_TIME;
let examCompleted = false;
let shuffledQuestions = [];

// عناصر DOM
const startScreen = document.getElementById('startScreen');
const examScreen = document.getElementById('examScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startExamBtn = document.getElementById('startExamBtn');
const endExamBtn = document.getElementById('endExamBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const questionText = document.getElementById('questionText');
const questionNumber = document.getElementById('questionNumber');
const optionsContainer = document.getElementById('optionsContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const progressPercent = document.getElementById('progressPercent');
const timer = document.getElementById('timer');
const darkModeToggle = document.getElementById('darkModeToggle');
const reviewBtn = document.getElementById('reviewBtn');
const retryBtn = document.getElementById('retryBtn');
const newTestBtn = document.getElementById('newTestBtn');
const reviewSection = document.getElementById('reviewSection');
const wrongAnswersList = document.getElementById('wrongAnswersList');
const noWrongAnswers = document.getElementById('noWrongAnswers');
const closeReviewBtn = document.getElementById('closeReviewBtn');
const finalScore = document.getElementById('finalScore');
const percentage = document.getElementById('percentage');
const grade = document.getElementById('grade');
const correctAnswers = document.getElementById('correctAnswers');
const wrongAnswers = document.getElementById('wrongAnswers');
const timeTaken = document.getElementById('timeTaken');
const scorePercentage = document.getElementById('scorePercentage');
const scoreCircle = document.getElementById('scoreCircle');
const confirmModal = document.getElementById('confirmModal');
const cancelEndBtn = document.getElementById('cancelEndBtn');
const confirmEndBtn = document.getElementById('confirmEndBtn');
const remainingQuestions = document.getElementById('remainingQuestions');
const unansweredAlert = document.getElementById('unansweredAlert');
const unansweredCount = document.getElementById('unansweredCount');
const questionsGrid = document.getElementById('questionsGrid');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// دالة التمرير إلى الأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        darkModeToggle.title = 'الوضع النهاري';
    } else {
        darkModeToggle.title = 'الوضع الليلي';
    }
    
    // إضافة فئة الانتقال للمواضيع
    document.querySelectorAll('.container, .navbar, .footer, .screen, .exam-header, .instructions, .exam-controls, .questions-nav-grid, .question-container, .review-section, .result-card, .modal-content').forEach(el => {
        el.classList.add('theme-transition');
    });
    
    initializeEventListeners();
    setupScrollTop();
});

// إعداد زر التمرير للأعلى
function setupScrollTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', scrollToTop);
}

// تهيئة مستمعي الأحداث
function initializeEventListeners() {
    startExamBtn.addEventListener('click', () => {
        startExam();
        setTimeout(scrollToTop, 100);
    });
    
    endExamBtn.addEventListener('click', showConfirmModal);
    
    prevBtn.addEventListener('click', () => {
        prevQuestion();
        setTimeout(scrollToTop, 50);
    });
    
    nextBtn.addEventListener('click', () => {
        nextQuestion();
        setTimeout(scrollToTop, 50);
    });
    
    darkModeToggle.addEventListener('click', toggleDarkMode);
    reviewBtn.addEventListener('click', toggleReview);
    retryBtn.addEventListener('click', retryExam);
    newTestBtn.addEventListener('click', startNewExam);
    closeReviewBtn.addEventListener('click', () => reviewSection.style.display = 'none');
    cancelEndBtn.addEventListener('click', () => confirmModal.style.display = 'none');
    confirmEndBtn.addEventListener('click', endExam);
    
    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) confirmModal.style.display = 'none';
    });
}

// بدء الامتحان
function startExam() {
    startScreen.classList.remove('active');
    examScreen.classList.add('active');
    
    startTime = new Date();
    timeLeft = EXAM_TIME;
    userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
    examCompleted = false;
    currentQuestionIndex = 0;
    
    shuffleAllQuestions();
    
    startTimer();
    loadQuestion(currentQuestionIndex);
    updateQuestionsGrid();
    updateUnansweredAlert();
}

// خلط جميع الأسئلة
function shuffleAllQuestions() {
    shuffledQuestions = [...quizQuestions].map(question => {
        if (question.type === 'multiple') {
            const optionsCopy = [...question.options];
            const correctAnswer = question.answer;
            
            // خلط الخيارات
            for (let i = optionsCopy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
            }
            
            // إيجاد الفهرس الجديد للإجابة الصحيحة
            const newCorrectIndex = optionsCopy.indexOf(correctAnswer);
            
            return {
                ...question,
                shuffledOptions: optionsCopy,
                shuffledCorrect: newCorrectIndex
            };
        } else {
            // أسئلة الصح/خطأ
            return {
                ...question,
                shuffledOptions: ['صح', 'خطأ'],
                shuffledCorrect: question.answer === 'صح' ? 0 : 1
            };
        }
    });
}

// تحميل السؤال
function loadQuestion(index) {
    const question = shuffledQuestions[index];
    
    questionNumber.textContent = `س${index + 1}`;
    questionText.textContent = question.question;
    
    const progress = ((index + 1) / TOTAL_QUESTIONS) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `السؤال ${index + 1} من ${TOTAL_QUESTIONS}`;
    progressPercent.textContent = `${Math.round(progress)}%`;
    
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === TOTAL_QUESTIONS - 1 ? 'إنهاء الاختبار' : 'التالي';
    
    const options = question.shuffledOptions;
    optionsContainer.innerHTML = '';
    
    options.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[index] === optionIndex) {
            optionElement.classList.add('selected');
        }
        
        const marker = document.createElement('div');
        marker.className = 'option-marker';
        marker.textContent = String.fromCharCode(1632 + optionIndex + 1);
        
        const text = document.createElement('div');
        text.className = 'option-text';
        text.textContent = option;
        
        optionElement.appendChild(marker);
        optionElement.appendChild(text);
        
        optionElement.addEventListener('click', () => selectOption(optionIndex));
        optionsContainer.appendChild(optionElement);
    });
    
    updateQuestionStatus(index);
    updateQuestionsGrid();
}

// تحديث حالة السؤال
function updateQuestionStatus(index) {
    const statusElement = document.getElementById('questionStatus');
    if (userAnswers[index] === null) {
        statusElement.innerHTML = '<i class="fas fa-star"></i> جديد';
        statusElement.style.color = 'var(--warning-color)';
    } else {
        statusElement.innerHTML = '<i class="fas fa-check"></i> تم الإجابة';
        statusElement.style.color = 'var(--success-color)';
    }
}

// تحديث شبكة التنقل بين الأسئلة
function updateQuestionsGrid() {
    questionsGrid.innerHTML = '';
    
    shuffledQuestions.forEach((_, index) => {
        const questionBtn = document.createElement('button');
        questionBtn.className = 'question-nav-btn';
        questionBtn.textContent = index + 1;
        
        // تحديد حالة الزر
        if (index === currentQuestionIndex) {
            questionBtn.classList.add('current');
        } else if (userAnswers[index] !== null) {
            questionBtn.classList.add('answered');
        } else {
            questionBtn.classList.add('unanswered');
        }
        
        questionBtn.addEventListener('click', () => {
            currentQuestionIndex = index;
            loadQuestion(currentQuestionIndex);
            setTimeout(scrollToTop, 50);
        });
        
        questionsGrid.appendChild(questionBtn);
    });
}

// تحديث تنبيه الأسئلة غير المحلولة
function updateUnansweredAlert() {
    const unanswered = userAnswers.filter(answer => answer === null).length;
    if (unanswered > 0) {
        unansweredCount.textContent = `${unanswered} أسئلة من أصل ${TOTAL_QUESTIONS}`;
        unansweredAlert.style.display = 'flex';
    } else {
        unansweredAlert.style.display = 'none';
    }
}

// اختيار إجابة
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    loadQuestion(currentQuestionIndex);
    updateUnansweredAlert();
}

// السؤال السابق
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// السؤال التالي
function nextQuestion() {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        showConfirmModal();
    }
}

// عرض نموذج تأكيد إنهاء الاختبار
function showConfirmModal() {
    const unanswered = userAnswers.filter(answer => answer === null).length;
    remainingQuestions.textContent = unanswered;
    confirmModal.style.display = 'flex';
}

// إنهاء الامتحان
function endExam() {
    confirmModal.style.display = 'none';
    clearInterval(timerInterval);
    examCompleted = true;
    
    examScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    calculateResults();
    if (parseInt(correctAnswers.textContent) >= Math.ceil(TOTAL_QUESTIONS * 0.6)) {
        showConfetti();
    }
    
    setTimeout(scrollToTop, 100);
}

// بدء المؤقت
function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            endExam();
        }
    }, 1000);
}

// تحديث عرض المؤقت
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.querySelector('span').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft < 300) {
        timer.style.color = 'var(--accent-color)';
    } else if (timeLeft < 600) {
        timer.style.color = 'var(--warning-color)';
    }
}

// حساب النتائج
function calculateResults() {
    let correctCount = 0;
    let wrongCount = 0;
    
    shuffledQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        if (userAnswer !== null && userAnswer === question.shuffledCorrect) {
            correctCount++;
        } else if (userAnswer !== null) {
            wrongCount++;
        }
    });
    
    const score = correctCount;
    const totalQuestions = TOTAL_QUESTIONS;
    const scorePercentageValue = (correctCount / totalQuestions) * 100;
    
    finalScore.textContent = `${score}/${totalQuestions}`;
    percentage.textContent = `${scorePercentageValue.toFixed(1)}%`;
    scorePercentage.textContent = `${scorePercentageValue.toFixed(1)}%`;
    correctAnswers.textContent = correctCount;
    wrongAnswers.textContent = wrongCount;
    
    let gradeText = '';
    if (scorePercentageValue >= 90) gradeText = 'امتياز';
    else if (scorePercentageValue >= 80) gradeText = 'جيد جداً';
    else if (scorePercentageValue >= 70) gradeText = 'جيد';
    else if (scorePercentageValue >= 60) gradeText = 'مقبول';
    else gradeText = 'راسب';
    
    grade.textContent = gradeText;
    grade.style.color = scorePercentageValue >= 60 ? 'var(--success-color)' : 'var(--accent-color)';
    
    const endTime = new Date();
    const timeDiff = Math.floor((endTime - startTime) / 1000);
    const minutesTaken = Math.floor(timeDiff / 60);
    const secondsTaken = timeDiff % 60;
    timeTaken.textContent = `${minutesTaken}:${secondsTaken.toString().padStart(2, '0')}`;
    
    const circleLength = 800;
    const offset = circleLength - (circleLength * (scorePercentageValue / 100));
    scoreCircle.style.strokeDashoffset = offset;
    
    if (scorePercentageValue >= 90) {
        scoreCircle.style.stroke = '#9b59b6';
    } else if (scorePercentageValue >= 80) {
        scoreCircle.style.stroke = 'var(--success-color)';
    } else if (scorePercentageValue >= 70) {
        scoreCircle.style.stroke = '#2ecc71';
    } else if (scorePercentageValue >= 60) {
        scoreCircle.style.stroke = 'var(--warning-color)';
    } else {
        scoreCircle.style.stroke = 'var(--accent-color)';
    }
}

// تأثير الكونفيتي
function showConfetti() {
    const colors = ['#4299e1', '#e53e3e', '#38a169', '#d69e2e', '#9b59b6'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.opacity = '0.8';
            confetti.style.borderRadius = '50%';
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                { transform: `translateY(${window.innerHeight}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 2000,
                easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }, i * 50);
    }
}

// تبديل الوضع الليلي
function toggleDarkMode() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    if (isDark) {
        document.body.removeAttribute('data-theme');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.title = 'الوضع الليلي';
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        darkModeToggle.title = 'الوضع النهاري';
        localStorage.setItem('darkMode', 'true');
    }
    
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);
}

// عرض/إخفاء المراجعة
function toggleReview() {
    const isVisible = reviewSection.style.display === 'block';
    
    if (isVisible) {
        reviewSection.style.display = 'none';
        reviewBtn.innerHTML = '<i class="fas fa-list-check"></i> مراجعة الإجابات الخاطئة';
        setTimeout(scrollToTop, 100);
    } else {
        reviewSection.style.display = 'block';
        reviewBtn.innerHTML = '<i class="fas fa-times"></i> إغلاق المراجعة';
        generateWrongAnswersReview();
        setTimeout(() => {
            reviewSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// توليد مراجعة الإجابات الخاطئة
function generateWrongAnswersReview() {
    wrongAnswersList.innerHTML = '';
    let wrongCount = 0;
    
    shuffledQuestions.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        
        // عرض فقط الأسئلة التي أجاب عليها المستخدم بشكل خاطئ
        if (userAnswerIndex !== null && userAnswerIndex !== question.shuffledCorrect) {
            wrongCount++;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            const questionDiv = document.createElement('div');
            questionDiv.className = 'review-question';
            questionDiv.textContent = `${index + 1}. ${question.question}`;
            
            const answersDiv = document.createElement('div');
            answersDiv.className = 'review-answers';
            
            const userAnswerItem = document.createElement('div');
            userAnswerItem.className = 'answer-item user-answer';
            userAnswerItem.innerHTML = `
                <i class="fas fa-user"></i>
                <span>إجابتك: ${question.shuffledOptions[userAnswerIndex]}</span>
            `;
