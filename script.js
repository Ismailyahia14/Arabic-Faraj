// تطبيق امتحان اللغة العربية
class ArabicExamApp {
    constructor() {
        this.questions = this.getQuestions();
        this.currentQuestion = 0;
        this.answers = new Array(this.questions.length).fill(null);
        this.startTime = null;
        this.timeLeft = 60 * 60; // 60 دقيقة
        this.timerInterval = null;
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        this.initializeApp();
    }
    
    // قاعدة بيانات الأسئلة
    getQuestions() {
        return [
            // الأسئلة 1-10 (متعددة الخيارات)
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
                answer: 3,
                explanation: '"رفضَهم" مفعول به منصوب بالفتحة'
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
                answer: 1,
                explanation: 'يجب الفصل للتوضيح في لغة الإعلام'
            },
            {
                id: 3,
                type: 'multiple',
                question: 'عدد التوابع في النحو هو:',
                options: ['ثلاثة', 'اثنان', 'أربعة', 'خمسة'],
                answer: 3,
                explanation: 'التوابع خمسة: النعت، البدل، التوكيد، العطف'
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
                answer: 2,
                explanation: 'الفعل المثال ليس من المعتل'
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
                answer: 3,
                explanation: 'قرأْنَ، درسنَ، نجحنَ'
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
                answer: 0,
                explanation: 'أسلوب المقابلة الصحيح'
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
                answer: 3,
                explanation: 'بنت أبي بكر (مجرور)، صوت أبو بكر (مرفوع)'
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
                answer: 2,
                explanation: 'لا يوجد "بدل الغلط" في النحو'
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
                answer: 0,
                explanation: 'النعت هو الوصف'
            },
            {
                id: 10,
                type: 'multiple',
                question: 'فاء ولام وعين الكلمة هي بالترتيب:',
                options: [
                    'الأول والأخير والوسط',
                    'الأول والوسط والأخير',
                    'الأخير والأول والوسط',
                    'الأخير والوسط والأخير'
                ],
                answer: 0,
                explanation: 'الفاء (الأول)، العين (الوسط)، اللام (الأخير)'
            },
            // الأسئلة 11-20 (تابع متعدد الخيارات)
            {
                id: 11,
                type: 'multiple',
                question: 'الـ DIPHTONGE هو ما سماه علماء التجويد:',
                options: ['حرف المد', 'حرف العلة', 'حرف اللين', 'حرف العطف'],
                answer: 2,
                explanation: 'يقابل حرف اللين'
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
                answer: 0,
                explanation: 'لا يكون في أول الكلمة'
            },
            {
                id: 13,
                type: 'multiple',
                question: 'معنى "ضاع يضوع" هو:',
                options: ['تاه يتوه', 'فاح يفوح', 'سار يسير', 'قام يقوم'],
                answer: 1,
                explanation: 'فاح يفوح'
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
                answer: 3,
                explanation: 'الفعل الناقص "استعددنا"'
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
                answer: 0,
                explanation: 'هذين (مجرور)، الرجلين (مضاف إليه)'
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
                answer: 2,
                explanation: 'الطالبان (مبتدأ)، أنفسهما (توكيد)'
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
                answer: 3,
                explanation: 'الألف لا تؤثر على ما قبلها'
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
                answer: 1,
                explanation: 'التعبير الشائع'
            },
            {
                id: 19,
                type: 'multiple',
                question: 'الصواب هو:',
                options: ['ابقُوا معنا', 'ابقَوا معنا', 'ابقيوا معنا', 'ابقوا معنا'],
                answer: 1,
                explanation: 'فعل الأمر "ابقَوا"'
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
                answer: 3,
                explanation: 'نائب فاعل للفعل المبني للمجهول'
            },
            // الأسئلة 21-30 (صح/خطأ)
            {
                id: 21,
                type: 'truefalse',
                question: 'إذا لم تظهر الياء في المضارع فإن أصل الألف واوي',
                answer: 1, // خطأ
                explanation: 'الأصل يائي'
            },
            {
                id: 22,
                type: 'truefalse',
                question: 'الفعل المثال (الذي يبدأ بياء أو واو) من أقسام الأفعال المعتلة',
                answer: 1, // خطأ
                explanation: 'ليس من المعتل'
            },
            {
                id: 23,
                type: 'truefalse',
                question: 'جملة "سلمت على كلي الصديقين" صحيحة',
                answer: 1, // خطأ
                explanation: 'الصواب: كلا الصديقين'
            },
            {
                id: 24,
                type: 'truefalse',
                question: '"ذان وتان" يعربان بالحركات الأصلية',
                answer: 1, // خطأ
                explanation: 'يعربان بالألف والياء'
            },
            {
                id: 25,
                type: 'truefalse',
                question: '"أل" التي تدخل أسماء الأعلام عهدية',
                answer: 1, // خطأ
                explanation: 'جنسية'
            },
            {
                id: 26,
                type: 'truefalse',
                question: '"الذين" تدل على المثنى',
                answer: 1, // خطأ
                explanation: 'للجمع'
            },
            {
                id: 27,
                type: 'truefalse',
                question: '"رِمنا" تعني أردنا',
                answer: 1, // خطأ
                explanation: 'من الرمي'
            },
            {
                id: 28,
                type: 'truefalse',
                question: '"حاك يحوك" تعني تردد',
                answer: 1, // خطأ
                explanation: 'تعني نسج'
            },
            {
                id: 29,
                type: 'truefalse',
                question: 'جملة "قرأت المقالين اللذان في الفيس" صحيحة',
                answer: 1, // خطأ
                explanation: 'الصواب: اللذين'
            },
            {
                id: 30,
                type: 'truefalse',
                question: 'التوابع ثلاثة فقط',
                answer: 1, // خطأ
                explanation: 'خمسة'
            }
        ];
    }
    
    // تهيئة التطبيق
    initializeApp() {
        this.render();
        this.setupEventListeners();
        this.applyDarkMode();
    }
    
    // تطبيق الوضع الليلي
    applyDarkMode() {
        if (this.isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
        }
    }
    
    // ربط الأحداث
    setupEventListeners() {
        // سيتم ربط الأحداث بعد التصيير
    }
    
    // عرض الواجهة
    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="logo">
                        <h1><i class="fas fa-university"></i> امتحان اللغة العربية</h1>
                        <p>جامعة صنعاء - كلية الإعلام</p>
                    </div>
                    <div class="nav-controls">
                        <button id="themeToggle" class="btn btn-secondary">
                            <i class="fas fa-moon"></i>
                        </button>
                    </div>
                </div>
            </nav>
            
            <div class="container">
                <div id="content">
                    ${this.renderStartScreen()}
                </div>
            </div>
            
            <footer class="footer">
                <p>© 2026 جامعة صنعاء - كلية الإعلام - الدفعة الخامسة والثلاثون</p>
                <p>تم تطوير هذا الموقع لأغراض تعليمية</p>
            </footer>
        `;
        
        this.setupDynamicEventListeners();
    }
    
    // شاشة البداية
    renderStartScreen() {
        return `
            <div class="start-screen">
                <div class="exam-header">
                    <h1><i class="fas fa-book-open"></i> امتحان اللغة العربية</h1>
                    <div class="university-info">
                        <h3>جامعة صنعاء - كلية الإعلام</h3>
                        <h3>اللجنة العلمية - الدفعة الخامسة والثلاثون</h3>
                        <h3>دكتور المقرر: رصين صالح الرصين</h3>
                    </div>
                    
                    <div class="student-info">
                        <div class="info-item">
                            <p>المقرر</p>
                            <p>اللغة العربية</p>
                        </div>
                        <div class="info-item">
                            <p>المستوى</p>
                            <p>الأول</p>
                        </div>
                        <div class="info-item">
                            <p>عدد الأسئلة</p>
                            <p>30 سؤال</p>
                        </div>
                        <div class="info-item">
                            <p>الوقت المخصص</p>
                            <p>60 دقيقة</p>
                        </div>
                    </div>
                </div>
                
                <div class="instructions">
                    <h3><i class="fas fa-info-circle"></i> تعليمات الامتحان:</h3>
                    <ul>
                        <li>اختر الإجابة الصحيحة بالنقر على الخيار المناسب</li>
                        <li>يمكنك تغيير إجابتك قبل الانتقال للسؤال التالي</li>
                        <li>سيتم تنبيهك عن الأسئلة التي لم تتم الإجابة عليها</li>
                        <li>الوقت المخصص: 60 دقيقة</li>
                        <li>لبدء الامتحان، اضغط على زر "ابدأ الامتحان"</li>
                    </ul>
                </div>
                
                <button id="startExam" class="btn btn-primary" style="margin: 30px auto; display: block; padding: 15px 40px; font-size: 1.2rem;">
                    <i class="fas fa-play-circle"></i> ابدأ الامتحان
                </button>
                
                <div style="text-align: center; margin-top: 20px; color: var(--text-color); opacity: 0.8;">
                    <p><i class="fas fa-lightbulb"></i> تذكر: اجب مستعينًا بالله تعالى</p>
                </div>
            </div>
        `;
    }
    
    // شاشة الامتحان
    renderExamScreen() {
        const question = this.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        
        return `
            <div class="exam-screen">
                <div class="exam-controls">
                    <div class="progress-container">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span>السؤال ${this.currentQuestion + 1} من ${this.questions.length}</span>
                            <span>${Math.round(progress)}%</span>
                        </div>
                        <div class="progress-bar" style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px;">
                            <div style="width: ${progress}%; height: 100%; background: linear-gradient(90deg, var(--secondary-color), var(--primary-color)); border-radius: 4px; transition: width 0.5s;"></div>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                        <div id="timer" class="timer" style="background: var(--card-bg); padding: 10px 20px; border-radius: 8px; font-weight: bold; color: var(--accent-color);">
                            <i class="fas fa-clock"></i> ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}
                        </div>
                        <button id="endExam" class="btn btn-secondary">
                            <i class="fas fa-flag-checkered"></i> إنهاء الاختبار
                        </button>
                    </div>
                </div>
                
                <div class="question-card">
                    <div class="question-header">
                        <div class="question-number">س${this.currentQuestion + 1}</div>
                        <div style="color: ${this.answers[this.currentQuestion] === null ? 'var(--warning-color)' : 'var(--success-color)'}; font-weight: bold;">
                            <i class="fas ${this.answers[this.currentQuestion] === null ? 'fa-star' : 'fa-check'}"></i>
                            ${this.answers[this.currentQuestion] === null ? 'جديد' : 'تم الإجابة'}
                        </div>
                    </div>
                    
                    <h2 class="question-text">${question.question}</h2>
                    
                    <div class="options-container">
                        ${this.renderOptions(question)}
                    </div>
                    
                    <div class="navigation-buttons" style="display: flex; justify-content: space-between; margin-top: 30px; gap: 15px;">
                        <button id="prevBtn" class="btn btn-secondary" ${this.currentQuestion === 0 ? 'disabled' : ''} style="flex: 1;">
                            <i class="fas fa-arrow-right"></i> السابق
                        </button>
                        <button id="nextBtn" class="btn btn-primary" style="flex: 1;">
                            ${this.currentQuestion === this.questions.length - 1 ? 'إنهاء الاختبار' : 'التالي'} 
                            <i class="fas fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
                
                <div class="questions-grid" style="background: var(--card-bg); padding: 20px; border-radius: 15px; margin-top: 20px;">
                    <h3 style="color: var(--secondary-color); margin-bottom: 15px;">
                        <i class="fas fa-layer-group"></i> التنقل بين الأسئلة
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(45px, 1fr)); gap: 10px;">
                        ${this.questions.map((_, index) => `
                            <button class="question-nav-btn ${index === this.currentQuestion ? 'current' : this.answers[index] !== null ? 'answered' : 'unanswered'}" 
                                    data-index="${index}"
                                    style="width: 45px; height: 45px; border-radius: 8px; border: 2px solid ${index === this.currentQuestion ? 'var(--secondary-color)' : this.answers[index] !== null ? 'var(--success-color)' : 'var(--border-color)'}; background: ${index === this.currentQuestion ? 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))' : this.answers[index] !== null ? 'rgba(56, 161, 105, 0.1)' : 'var(--bg-color)'}; color: ${index === this.currentQuestion ? 'white' : this.answers[index] !== null ? 'var(--success-color)' : 'var(--text-color)'}; cursor: pointer;">
                                ${index + 1}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                ${this.renderUnansweredAlert()}
            </div>
        `;
    }
    
    // عرض الخيارات
    renderOptions(question) {
        if (question.type === 'truefalse') {
            return `
                <div class="option ${this.answers[this.currentQuestion] === 0 ? 'selected' : ''}" data-index="0">
                    <div class="option-marker">١</div>
                    <div class="option-text">صح</div>
                </div>
                <div class="option ${this.answers[this.currentQuestion] === 1 ? 'selected' : ''}" data-index="1">
                    <div class="option-marker">٢</div>
                    <div class="option-text">خطأ</div>
                </div>
            `;
        } else {
            return question.options.map((option, index) => `
                <div class="option ${this.answers[this.currentQuestion] === index ? 'selected' : ''}" data-index="${index}">
                    <div class="option-marker">${String.fromCharCode(1632 + index + 1)}</div>
                    <div class="option-text">${option}</div>
                </div>
            `).join('');
        }
    }
    
    // تنبيه الأسئلة غير المجابة
    renderUnansweredAlert() {
        const unanswered = this.answers.filter(answer => answer === null).length;
        if (unanswered > 0) {
            return `
                <div style="background: rgba(214, 158, 46, 0.1); border: 2px solid var(--warning-color); color: var(--warning-color); padding: 15px; border-radius: 10px; margin-top: 20px; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>${unanswered} أسئلة لم تتم الإجابة عليها</span>
                </div>
            `;
        }
        return '';
    }
    
    // شاشة النتائج
    renderResultsScreen() {
        const results = this.calculateResults();
        const percentage = (results.correct / this.questions.length) * 100;
        const circleOffset = 800 - (800 * (percentage / 100));
        const timeDiff = Math.floor((new Date() - this.startTime) / 1000);
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        
        let grade = '';
        let gradeColor = '';
        if (percentage >= 90) {
            grade = 'امتياز';
            gradeColor = '#9b59b6';
        } else if (percentage >= 80) {
            grade = 'جيد جداً';
            gradeColor = 'var(--success-color)';
        } else if (percentage >= 70) {
            grade = 'جيد';
            gradeColor = '#2ecc71';
        } else if (percentage >= 60) {
            grade = 'مقبول';
            gradeColor = 'var(--warning-color)';
        } else {
            grade = 'راسب';
            gradeColor = 'var(--accent-color)';
        }
        
        return `
            <div class="results-screen">
                <div class="results-header">
                    <h1><i class="fas fa-chart-line"></i> نتائج الامتحان</h1>
                    
                    <div class="score-circle">
                        <svg width="260" height="260">
                            <circle cx="130" cy="130" r="120" fill="none" stroke="var(--light-color)" stroke-width="10"/>
                            <circle id="scoreCircle" cx="130" cy="130" r="120" fill="none" stroke="${gradeColor}" 
                                    stroke-width="10" stroke-linecap="round" transform="rotate(-90 130 130)"
                                    stroke-dasharray="800" stroke-dashoffset="800"/>
                        </svg>
                        <div class="score-text">
                            <h2>${results.correct}/${this.questions.length}</h2>
                            <p>${percentage.toFixed(1)}%</p>
                            <p style="color: ${gradeColor}; font-size: 1.2rem; margin-top: 5px;">${grade}</p>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0;">
                    <div class="result-card">
                        <h3><i class="fas fa-check-circle"></i> صحيحة</h3>
                        <p style="font-size: 2.5rem; font-weight: bold;">${results.correct}</p>
                    </div>
                    <div class="result-card">
                        <h3><i class="fas fa-times-circle"></i> خاطئة</h3>
                        <p style="font-size: 2.5rem; font-weight: bold;">${results.wrong}</p>
                    </div>
                    <div class="result-card">
                        <h3><i class="fas fa-clock"></i> الوقت</h3>
                        <p style="font-size: 2.5rem; font-weight: bold;">${minutes}:${seconds.toString().padStart(2, '0')}</p>
                    </div>
                    <div class="result-card">
                        <h3><i class="fas fa-chart-bar"></i> النسبة</h3>
                        <p style="font-size: 2.5rem; font-weight: bold;">${percentage.toFixed(1)}%</p>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: center; gap: 20px; margin: 40px 0; flex-wrap: wrap;">
                    <button id="reviewBtn" class="btn btn-secondary">
                        <i class="fas fa-list-check"></i> مراجعة الأخطاء
                    </button>
                    <button id="newTestBtn" class="btn btn-primary">
                        <i class="fas fa-redo"></i> اختبار جديد
                    </button>
                    <button id="retryBtn" class="btn btn-primary">
                        <i class="fas fa-sync-alt"></i> إعادة الاختبار
                    </button>
                </div>
                
                <div id="reviewSection" style="display: none; background: var(--card-bg); padding: 30px; border-radius: 15px; margin-top: 30px;">
                    <h3 style="color: var(--secondary-color); text-align: center; margin-bottom: 25px;">
                        <i class="fas fa-clipboard-check"></i> مراجعة الإجابات الخاطئة
                    </h3>
                    <div id="wrongAnswersList"></div>
                </div>
            </div>
        `;
    }
    
    // حساب النتائج
    calculateResults() {
        let correct = 0;
        let wrong = 0;
        
        this.questions.forEach((question, index) => {
            if (this.answers[index] === question.answer) {
                correct++;
            } else if (this.answers[index] !== null) {
                wrong++;
            }
        });
        
        return { correct, wrong };
    }
    
    // ربط الأحداث الديناميكية
    setupDynamicEventListeners() {
        // زر البدء
        const startBtn = document.getElementById('startExam');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startExam());
        }
        
        // تبديل الوضع الليلي
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggleDarkMode());
        }
    }
    
    // بدء الامتحان
    startExam() {
        this.startTime = new Date();
        this.currentQuestion = 0;
        this.answers.fill(null);
        this.timeLeft = 60 * 60;
        
        this.startTimer();
        this.showExamScreen();
    }
    
    // عرض شاشة الامتحان
    showExamScreen() {
        document.getElementById('content').innerHTML = this.renderExamScreen();
        this.setupExamEventListeners();
    }
    
    // إعداد مؤقت الامتحان
    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.endExam();
            }
        }, 1000);
    }
    
    // تحديث عرض المؤقت
    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeLeft / 60);
            const seconds = this.timeLeft % 60;
            timerElement.innerHTML = `<i class="fas fa-clock"></i> ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (this.timeLeft < 300) {
                timerElement.style.color = 'var(--accent-color)';
            }
        }
    }
    
    // ربط أحداث الامتحان
    setupExamEventListeners() {
        // اختيار إجابة
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.selectAnswer(index);
            });
        });
        
        // التنقل بين الأسئلة
        document.getElementById('prevBtn')?.addEventListener('click', () => this.prevQuestion());
        document.getElementById('nextBtn')?.addEventListener('click', () => this.nextQuestion());
        
        // إنهاء الامتحان
        document.getElementById('endExam')?.addEventListener('click', () => this.endExam());
        
        // التنقل السريع
        document.querySelectorAll('.question-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.goToQuestion(index);
            });
        });
    }
    
    // اختيار إجابة
    selectAnswer(index) {
        this.answers[this.currentQuestion] = index;
        this.showExamScreen();
    }
    
    // السؤال السابق
    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showExamScreen();
        }
    }
    
    // السؤال التالي
    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.showExamScreen();
        } else {
            this.endExam();
        }
    }
    
    // الانتقال إلى سؤال معين
    goToQuestion(index) {
        this.currentQuestion = index;
        this.showExamScreen();
    }
    
    // إنهاء الامتحان
    endExam() {
        clearInterval(this.timerInterval);
        this.showResultsScreen();
    }
    
    // عرض النتائج
    showResultsScreen() {
        document.getElementById('content').innerHTML = this.renderResultsScreen();
        this.setupResultsEventListeners();
        
        // تحريك دائرة النتيجة
        setTimeout(() => {
            const circle = document.getElementById('scoreCircle');
            if (circle) {
                circle.style.transition = 'stroke-dashoffset 2s ease-out';
                const results = this.calculateResults();
                const percentage = (results.correct / this.questions.length) * 100;
                const offset = 800 - (800 * (percentage / 100));
                circle.style.strokeDashoffset = offset;
            }
        }, 100);
    }
    
    // ربط أحداث النتائج
    setupResultsEventListeners() {
        document.getElementById('reviewBtn')?.addEventListener('click', () => this.toggleReview());
        document.getElementById('newTestBtn')?.addEventListener('click', () => this.newTest());
        document.getElementById('retryBtn')?.addEventListener('click', () => this.retryTest());
    }
    
    // تبديل عرض المراجعة
    toggleReview() {
        const reviewSection = document.getElementById('reviewSection');
        const reviewBtn = document.getElementById('reviewBtn');
        
        if (reviewSection.style.display === 'none' || !reviewSection.style.display) {
            reviewSection.style.display = 'block';
            reviewBtn.innerHTML = '<i class="fas fa-times"></i> إغلاق المراجعة';
            this.showWrongAnswers();
        } else {
            reviewSection.style.display = 'none';
            reviewBtn.innerHTML = '<i class="fas fa-list-check"></i> مراجعة الأخطاء';
        }
    }
    
    // عرض الإجابات الخاطئة
    showWrongAnswers() {
        const container = document.getElementById('wrongAnswersList');
        let wrongCount = 0;
        let html = '';
        
        this.questions.forEach((question, index) => {
            if (this.answers[index] !== null && this.answers[index] !== question.answer) {
                wrongCount++;
                
                let userAnswer = '';
                let correctAnswer = '';
                
                if (question.type === 'truefalse') {
                    userAnswer = this.answers[index] === 0 ? 'صح' : 'خطأ';
                    correctAnswer = question.answer === 0 ? 'صح' : 'خطأ';
                } else {
                    userAnswer = question.options[this.answers[index]];
                    correctAnswer = question.options[question.answer];
                }
                
                html += `
                    <div style="background: var(--bg-color); padding: 20px; border-radius: 10px; margin-bottom: 15px; border-right: 5px solid var(--accent-color);">
                        <div style="font-weight: bold; margin-bottom: 10px; color: var(--text-color);">
                            ${index + 1}. ${question.question}
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <div style="background: rgba(229, 62, 62, 0.1); padding: 10px; border-radius: 5px; border-right: 3px solid var(--accent-color);">
                                <i class="fas fa-user" style="color: var(--accent-color); margin-left: 5px;"></i>
                                إجابتك: ${userAnswer}
                            </div>
                            <div style="background: rgba(56, 161, 105, 0.1); padding: 10px; border-radius: 5px; border-right: 3px solid var(--success-color);">
                                <i class="fas fa-check" style="color: var(--success-color); margin-left: 5px;"></i>
                                الإجابة الصحيحة: ${correctAnswer}
                            </div>
                            ${question.explanation ? `
                                <div style="font-size: 0.9rem; color: var(--text-color); opacity: 0.8; margin-top: 5px;">
                                    <i class="fas fa-info-circle" style="margin-left: 5px;"></i>
                                    ${question.explanation}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }
        });
        
        if (wrongCount === 0) {
            html = `
                <div style="text-align: center; padding: 40px; color: var(--success-color);">
                    <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 15px;"></i>
                    <h3 style="color: var(--success-color);">ممتاز! لم تكن لديك إجابات خاطئة</h3>
                    <p style="color: var(--text-color); opacity: 0.8; margin-top: 10px;">جميع إجاباتك كانت صحيحة</p>
                </div>
            `;
        }
        
        container.innerHTML = html;
    }
    
    // اختبار جديد
    newTest() {
        this.currentQuestion = 0;
        this.answers.fill(null);
        this.startExam();
    }
    
    // إعادة الاختبار
    retryTest() {
        this.currentQuestion = 0;
        this.answers.fill(null);
        this.startExam();
    }
    
    // تبديل الوضع الليلي
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        
        if (this.isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            document.querySelector('#themeToggle i').className = 'fas fa-sun';
        } else {
            document.body.removeAttribute('data-theme');
            document.querySelector('#themeToggle i').className = 'fas fa-moon';
        }
        
        localStorage.setItem('darkMode', this.isDarkMode);
    }
}

// بدء التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    new ArabicExamApp();
});