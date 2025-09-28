import { Translation } from '@/types/language';

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      team: 'Team',
      contact: 'Contact'
    },
    hero: {
      title: 'Expert Legal Solutions for Your Peace of Mind',
      subtitle: 'With over 15 years of experience, we provide comprehensive legal services with unwavering dedication to justice and client satisfaction.',
      cta: 'Get Consultation'
    },
    services: {
      title: 'Our Legal Services',
      subtitle: 'Comprehensive legal solutions tailored to your needs',
      items: [
        {
          title: 'Corporate Law',
          description: 'Expert guidance for business formation, contracts, mergers, and corporate governance matters.'
        },
        {
          title: 'Civil Litigation',
          description: 'Aggressive representation in civil disputes, personal injury claims, and commercial litigation.'
        },
        {
          title: 'Family Law',
          description: 'Compassionate support for divorce, custody, adoption, and other family legal matters.'
        },
        {
          title: 'Real Estate Law',
          description: 'Complete legal services for property transactions, disputes, and real estate investments.'
        },
        {
          title: 'Criminal Defense',
          description: 'Experienced defense attorneys protecting your rights in criminal proceedings.'
        },
        {
          title: 'Immigration Law',
          description: 'Comprehensive immigration services including visas, citizenship, and deportation defense.'
        }
      ]
    },
    about: {
      title: 'About Legal Eyes',
      subtitle: 'Your trusted legal partner since 2008',
      description: 'Legal Eyes has been at the forefront of legal excellence, providing innovative solutions and unwavering advocacy for our clients. Our team of experienced attorneys combines deep legal knowledge with a commitment to achieving the best possible outcomes.',
      features: [
        'Expert legal consultation',
        '24/7 client support',
        'Multilingual services',
        'Proven track record'
      ],
      stats: {
        experience: 'Years of Experience',
        cases: 'Cases Won',
        clients: 'Satisfied Clients',
        success: 'Success Rate'
      }
    },
    team: {
      title: 'Our Legal Team',
      subtitle: 'Meet our experienced attorneys',
      members: [
        {
          name: 'Sarah Mitchell',
          position: 'Senior Partner, Corporate Law',
          description: 'Specializes in mergers & acquisitions with 20+ years of experience in corporate transactions.'
        },
        {
          name: 'David Rodriguez',
          position: 'Partner, Criminal Defense',
          description: 'Former prosecutor with extensive trial experience in complex criminal cases.'
        },
        {
          name: 'Emily Chen',
          position: 'Associate, Family Law',
          description: 'Dedicated to helping families navigate difficult legal situations with compassion and expertise.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch for a consultation',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        subjectRequired: 'Subject is required',
        messageRequired: 'Message is required',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.'
      },
      info: {
        address: '123 Justice Boulevard, Legal District, City 12345',
        phone: '+1 (555) 123-4567',
        email: 'info@legaleyes.com',
        hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
        addressLabel: 'Address',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        hoursLabel: 'Hours'
      }
    },
    footer: {
      description: 'Legal Eyes provides expert legal services with integrity, dedication, and results.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Info',
      rights: '© 2024 Legal Eyes. All rights reserved.'
    },
    serviceDetail: {
      learnMore: 'Learn More',
      scheduleConsultation: 'Schedule Consultation',
      callNow: 'Call Now',
      keyFeatures: 'Key Features',
      whyChoose: 'Why Choose Our',
      servicesQuestion: 'Services?',
      ourProcess: 'Our Process',
      howWeHandle: 'How we handle your',
      case: 'case',
      relatedServicesTitle: 'Related Services',
      readyToStart: 'Ready to Get Started?',
      contactToday: 'Contact us today for a consultation about your',
      needs: 'needs.',
      getConsultation: 'Get Consultation',
      features: {
        corporate: [
          'Business Formation & Incorporation',
          'Contract Drafting & Review',
          'Mergers & Acquisitions',
          'Corporate Governance',
          'Compliance & Regulatory Affairs',
          'Intellectual Property Protection'
        ],
        litigation: [
          'Personal Injury Claims',
          'Commercial Disputes',
          'Contract Disputes',
          'Property Disputes',
          'Employment Litigation',
          'Insurance Claims'
        ],
        family: [
          'Divorce & Separation',
          'Child Custody & Support',
          'Adoption Services',
          'Prenuptial Agreements',
          'Domestic Violence Protection',
          'Property Division'
        ],
        realEstate: [
          'Property Transactions',
          'Real Estate Contracts',
          'Title Examinations',
          'Zoning & Land Use',
          'Property Disputes',
          'Commercial Real Estate'
        ],
        criminal: [
          'DUI/DWI Defense',
          'Drug Crime Defense',
          'White Collar Crimes',
          'Violent Crime Defense',
          'Federal Criminal Defense',
          'Appeals & Post-Conviction'
        ],
        immigration: [
          'Visa Applications',
          'Green Card Processing',
          'Citizenship & Naturalization',
          'Deportation Defense',
          'Family Immigration',
          'Business Immigration'
        ]
      },
      benefits: {
        corporate: [
          'Expert legal guidance for business decisions',
          'Risk mitigation and compliance assurance',
          'Streamlined business operations',
          'Protection of corporate interests'
        ],
        litigation: [
          'Aggressive representation in court',
          'Experienced trial attorneys',
          'Comprehensive case preparation',
          'Maximum compensation recovery'
        ],
        family: [
          'Compassionate legal support',
          'Child-focused solutions',
          'Confidential consultations',
          'Emotional and legal guidance'
        ],
        realEstate: [
          'Smooth property transactions',
          'Risk-free real estate deals',
          'Expert contract review',
          'Investment protection'
        ],
        criminal: [
          'Experienced trial attorneys',
          'Aggressive defense strategies',
          'Constitutional rights protection',
          '24/7 emergency consultation'
        ],
        immigration: [
          'Expert immigration guidance',
          'Multilingual support',
          'Comprehensive case management',
          'High success rate'
        ]
      },
      process: {
        corporate: [
          { step: 1, title: 'Initial Consultation', description: 'We assess your business needs and legal requirements' },
          { step: 2, title: 'Legal Strategy', description: 'Develop a comprehensive legal strategy tailored to your business' },
          { step: 3, title: 'Documentation', description: 'Prepare and review all necessary legal documents' },
          { step: 4, title: 'Implementation', description: 'Execute the legal strategy and ensure compliance' }
        ],
        litigation: [
          { step: 1, title: 'Case Evaluation', description: 'Thorough assessment of your legal claim' },
          { step: 2, title: 'Investigation', description: 'Comprehensive evidence gathering and analysis' },
          { step: 3, title: 'Negotiation', description: 'Attempt to resolve disputes through negotiation' },
          { step: 4, title: 'Litigation', description: 'Aggressive court representation when necessary' }
        ],
        family: [
          { step: 1, title: 'Confidential Consultation', description: 'Private discussion of your family situation' },
          { step: 2, title: 'Legal Options', description: 'Explore all available legal remedies' },
          { step: 3, title: 'Mediation', description: 'Attempt amicable resolution when possible' },
          { step: 4, title: 'Court Representation', description: 'Strong advocacy in family court proceedings' }
        ],
        realEstate: [
          { step: 1, title: 'Property Review', description: 'Comprehensive property and title examination' },
          { step: 2, title: 'Contract Analysis', description: 'Detailed review of all transaction documents' },
          { step: 3, title: 'Due Diligence', description: 'Thorough investigation of property matters' },
          { step: 4, title: 'Closing Support', description: 'Complete assistance through closing process' }
        ],
        criminal: [
          { step: 1, title: 'Emergency Consultation', description: 'Immediate legal advice and rights protection' },
          { step: 2, title: 'Case Investigation', description: 'Thorough investigation of charges and evidence' },
          { step: 3, title: 'Defense Strategy', description: 'Develop comprehensive defense approach' },
          { step: 4, title: 'Court Representation', description: 'Aggressive advocacy in criminal proceedings' }
        ],
        immigration: [
          { step: 1, title: 'Eligibility Assessment', description: 'Evaluate your immigration options and eligibility' },
          { step: 2, title: 'Documentation', description: 'Prepare and organize all required documents' },
          { step: 3, title: 'Application Filing', description: 'Submit applications and petitions to USCIS' },
          { step: 4, title: 'Follow-up Support', description: 'Ongoing support throughout the process' }
        ]
      },
      relatedServices: {
        corporate: [
          { title: 'Contract Law', description: 'Comprehensive contract services' },
          { title: 'Employment Law', description: 'Workplace legal solutions' },
          { title: 'Compliance', description: 'Regulatory compliance services' }
        ],
        litigation: [
          { title: 'Mediation', description: 'Alternative dispute resolution' },
          { title: 'Legal Research', description: 'Comprehensive legal analysis' },
          { title: 'Legal Defense', description: 'Protective legal services' }
        ],
        family: [
          { title: 'Child Advocacy', description: 'Protecting children\'s interests' },
          { title: 'Property Law', description: 'Asset division and protection' },
          { title: 'Protection Orders', description: 'Legal protection services' }
        ],
        realEstate: [
          { title: 'Contract Law', description: 'Real estate contract services' },
          { title: 'Property Disputes', description: 'Real estate litigation' },
          { title: 'Title Insurance', description: 'Property protection services' }
        ],
        criminal: [
          { title: 'Appeals', description: 'Criminal appeals and post-conviction relief' },
          { title: 'Bail Hearings', description: 'Bail and bond assistance' },
          { title: 'Plea Negotiations', description: 'Favorable plea agreement negotiations' }
        ],
        immigration: [
          { title: 'Family Reunification', description: 'Bringing families together' },
          { title: 'Work Visas', description: 'Employment-based immigration' },
          { title: 'Asylum & Refugee', description: 'Protection for those in need' }
        ]
      }
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      team: 'Команда',
      contact: 'Контакты'
    },
    hero: {
      title: 'Экспертные юридические решения для вашего спокойствия',
      subtitle: 'С более чем 15-летним опытом мы предоставляем комплексные юридические услуги с непоколебимой преданностью справедливости и удовлетворенности клиентов.',
      cta: 'Получить консультацию'
    },
    services: {
      title: 'Наши юридические услуги',
      subtitle: 'Комплексные правовые решения, адаптированные под ваши потребности',
      items: [
        {
          title: 'Корпоративное право',
          description: 'Экспертное руководство по созданию бизнеса, контрактам, слияниям и вопросам корпоративного управления.'
        },
        {
          title: 'Гражданские споры',
          description: 'Агрессивное представительство в гражданских спорах, исках о возмещении ущерба и коммерческих тяжбах.'
        },
        {
          title: 'Семейное право',
          description: 'Сострадательная поддержка при разводе, опеке, усыновлении и других семейных правовых вопросах.'
        },
        {
          title: 'Право недвижимости',
          description: 'Полные юридические услуги по сделкам с недвижимостью, спорам и инвестициям в недвижимость.'
        },
        {
          title: 'Уголовная защита',
          description: 'Опытные адвокаты по защите, защищающие ваши права в уголовном производстве.'
        },
        {
          title: 'Иммиграционное право',
          description: 'Комплексные иммиграционные услуги, включая визы, гражданство и защиту от депортации.'
        }
      ]
    },
    about: {
      title: 'О Legal Eyes',
      subtitle: 'Ваш надежный юридический партнер с 2008 года',
      description: 'Legal Eyes находится в авангарде юридического совершенства, предоставляя инновационные решения и непоколебимую защиту для наших клиентов. Наша команда опытных адвокатов сочетает глубокие правовые знания с приверженностью достижению наилучших возможных результатов.',
      features: [
        'Экспертная юридическая консультация',
        'Поддержка клиентов 24/7',
        'Многоязычные услуги',
        'Проверенный послужной список'
      ],
      stats: {
        experience: 'Лет опыта',
        cases: 'Выигранных дел',
        clients: 'Довольных клиентов',
        success: 'Процент успеха'
      }
    },
    team: {
      title: 'Наша юридическая команда',
      subtitle: 'Познакомьтесь с нашими опытными адвокатами',
      members: [
        {
          name: 'Сара Митчелл',
          position: 'Старший партнер, корпоративное право',
          description: 'Специализируется на слияниях и поглощениях с более чем 20-летним опытом корпоративных сделок.'
        },
        {
          name: 'Дэвид Родригес',
          position: 'Партнер, уголовная защита',
          description: 'Бывший прокурор с обширным судебным опытом по сложным уголовным делам.'
        },
        {
          name: 'Эмили Чен',
          position: 'Младший партнер, семейное право',
          description: 'Посвящена помощи семьям в навигации сложных правовых ситуаций с состраданием и экспертизой.'
        }
      ]
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Свяжитесь для консультации',
      form: {
        name: 'Полное имя',
        email: 'Адрес электронной почты',
        subject: 'Тема',
        message: 'Сообщение',
        send: 'Отправить сообщение',
        nameRequired: 'Имя обязательно',
        emailRequired: 'Email обязателен',
        emailInvalid: 'Введите действительный email',
        subjectRequired: 'Тема обязательна',
        messageRequired: 'Сообщение обязательно',
        success: 'Сообщение успешно отправлено!',
        error: 'Не удалось отправить сообщение. Попробуйте еще раз.'
      },
      info: {
        address: 'ул. Справедливости 123, Юридический район, Город 12345',
        phone: '+1 (555) 123-4567',
        email: 'info@legaleyes.com',
        hours: 'Пн-Пт: 9:00 - 18:00',
        addressLabel: 'Адрес',
        phoneLabel: 'Телефон',
        emailLabel: 'Email',
        hoursLabel: 'Часы работы'
      }
    },
    footer: {
      description: 'Legal Eyes предоставляет экспертные юридические услуги с честностью, преданностью и результатами.',
      quickLinks: 'Быстрые ссылки',
      services: 'Услуги',
      contact: 'Контактная информация',
      rights: '© 2024 Legal Eyes. Все права защищены.'
    },
    serviceDetail: {
      learnMore: 'Узнать больше',
      scheduleConsultation: 'Записаться на консультацию',
      callNow: 'Позвонить сейчас',
      keyFeatures: 'Ключевые особенности',
      whyChoose: 'Почему выбрать наши',
      servicesQuestion: 'услуги?',
      ourProcess: 'Наш процесс',
      howWeHandle: 'Как мы обрабатываем ваше',
      case: 'дело',
      relatedServicesTitle: 'Связанные услуги',
      readyToStart: 'Готовы начать?',
      contactToday: 'Свяжитесь с нами сегодня для консультации по вашим',
      needs: 'потребностям.',
      getConsultation: 'Получить консультацию',
      features: {
        corporate: [
          'Создание и регистрация бизнеса',
          'Составление и проверка договоров',
          'Слияния и поглощения',
          'Корпоративное управление',
          'Соблюдение требований и регулирование',
          'Защита интеллектуальной собственности'
        ],
        litigation: [
          'Иски о возмещении ущерба',
          'Коммерческие споры',
          'Договорные споры',
          'Споры о собственности',
          'Трудовые споры',
          'Страховые иски'
        ],
        family: [
          'Развод и раздельное проживание',
          'Опека и алименты',
          'Услуги по усыновлению',
          'Брачные договоры',
          'Защита от домашнего насилия',
          'Раздел имущества'
        ],
        realEstate: [
          'Сделки с недвижимостью',
          'Договоры недвижимости',
          'Проверка правового титула',
          'Зонирование и землепользование',
          'Споры о недвижимости',
          'Коммерческая недвижимость'
        ],
        criminal: [
          'Защита по делам о вождении в нетрезвом виде',
          'Защита по наркотическим преступлениям',
          'Преступления белых воротничков',
          'Защита по насильственным преступлениям',
          'Федеральная уголовная защита',
          'Апелляции и пост-приговорные процедуры'
        ],
        immigration: [
          'Заявления на визы',
          'Обработка грин-карт',
          'Гражданство и натурализация',
          'Защита от депортации',
          'Семейная иммиграция',
          'Бизнес-иммиграция'
        ]
      },
      benefits: {
        corporate: [
          'Экспертное юридическое руководство для бизнес-решений',
          'Снижение рисков и обеспечение соответствия',
          'Оптимизированные бизнес-операции',
          'Защита корпоративных интересов'
        ],
        litigation: [
          'Агрессивное представительство в суде',
          'Опытные судебные адвокаты',
          'Комплексная подготовка дела',
          'Максимальное возмещение ущерба'
        ],
        family: [
          'Сострадательная правовая поддержка',
          'Решения, ориентированные на детей',
          'Конфиденциальные консультации',
          'Эмоциональное и правовое руководство'
        ],
        realEstate: [
          'Гладкие сделки с недвижимостью',
          'Безрисковые сделки с недвижимостью',
          'Экспертная проверка договоров',
          'Защита инвестиций'
        ],
        criminal: [
          'Опытные судебные адвокаты',
          'Агрессивные стратегии защиты',
          'Защита конституционных прав',
          'Экстренная консультация 24/7'
        ],
        immigration: [
          'Экспертное иммиграционное руководство',
          'Многоязычная поддержка',
          'Комплексное управление делами',
          'Высокий процент успеха'
        ]
      },
      process: {
        corporate: [
          { step: 1, title: 'Первичная консультация', description: 'Оцениваем ваши бизнес-потребности и правовые требования' },
          { step: 2, title: 'Правовая стратегия', description: 'Разрабатываем комплексную правовую стратегию для вашего бизнеса' },
          { step: 3, title: 'Документооборот', description: 'Подготавливаем и проверяем все необходимые правовые документы' },
          { step: 4, title: 'Реализация', description: 'Выполняем правовую стратегию и обеспечиваем соответствие' }
        ],
        litigation: [
          { step: 1, title: 'Оценка дела', description: 'Тщательная оценка вашего правового требования' },
          { step: 2, title: 'Расследование', description: 'Комплексный сбор и анализ доказательств' },
          { step: 3, title: 'Переговоры', description: 'Попытка разрешить споры путем переговоров' },
          { step: 4, title: 'Судебное разбирательство', description: 'Агрессивное представительство в суде при необходимости' }
        ],
        family: [
          { step: 1, title: 'Конфиденциальная консультация', description: 'Частное обсуждение вашей семейной ситуации' },
          { step: 2, title: 'Правовые варианты', description: 'Изучение всех доступных правовых средств' },
          { step: 3, title: 'Медиация', description: 'Попытка мирного разрешения когда возможно' },
          { step: 4, title: 'Представительство в суде', description: 'Сильная защита в семейных судебных процедурах' }
        ],
        realEstate: [
          { step: 1, title: 'Проверка недвижимости', description: 'Комплексная проверка недвижимости и правового титула' },
          { step: 2, title: 'Анализ договора', description: 'Детальная проверка всех документов сделки' },
          { step: 3, title: 'Должная осмотрительность', description: 'Тщательное расследование вопросов недвижимости' },
          { step: 4, title: 'Поддержка закрытия', description: 'Полная помощь в процессе закрытия сделки' }
        ],
        criminal: [
          { step: 1, title: 'Экстренная консультация', description: 'Немедленная правовая помощь и защита прав' },
          { step: 2, title: 'Расследование дела', description: 'Тщательное расследование обвинений и доказательств' },
          { step: 3, title: 'Стратегия защиты', description: 'Разработка комплексного подхода к защите' },
          { step: 4, title: 'Представительство в суде', description: 'Агрессивная защита в уголовном процессе' }
        ],
        immigration: [
          { step: 1, title: 'Оценка права', description: 'Оценка ваших иммиграционных возможностей и права' },
          { step: 2, title: 'Документооборот', description: 'Подготовка и организация всех необходимых документов' },
          { step: 3, title: 'Подача заявления', description: 'Подача заявлений и петиций в USCIS' },
          { step: 4, title: 'Последующая поддержка', description: 'Постоянная поддержка на протяжении всего процесса' }
        ]
      },
      relatedServices: {
        corporate: [
          { title: 'Договорное право', description: 'Комплексные договорные услуги' },
          { title: 'Трудовое право', description: 'Правовые решения для рабочих мест' },
          { title: 'Соответствие', description: 'Услуги регулятивного соответствия' }
        ],
        litigation: [
          { title: 'Медиация', description: 'Альтернативное разрешение споров' },
          { title: 'Правовые исследования', description: 'Комплексный правовой анализ' },
          { title: 'Правовая защита', description: 'Защитные правовые услуги' }
        ],
        family: [
          { title: 'Защита детей', description: 'Защита интересов детей' },
          { title: 'Имущественное право', description: 'Раздел и защита активов' },
          { title: 'Охранные ордера', description: 'Услуги правовой защиты' }
        ],
        realEstate: [
          { title: 'Договорное право', description: 'Услуги по договорам недвижимости' },
          { title: 'Споры о недвижимости', description: 'Судебные споры по недвижимости' },
          { title: 'Страхование титула', description: 'Услуги защиты недвижимости' }
        ],
        criminal: [
          { title: 'Апелляции', description: 'Уголовные апелляции и пост-приговорная помощь' },
          { title: 'Слушания по залогу', description: 'Помощь с залогом и поручительством' },
          { title: 'Переговоры о сделке', description: 'Переговоры о выгодных соглашениях о признании вины' }
        ],
        immigration: [
          { title: 'Воссоединение семьи', description: 'Объединение семей' },
          { title: 'Рабочие визы', description: 'Иммиграция на основе трудоустройства' },
          { title: 'Убежище и беженцы', description: 'Защита для нуждающихся' }
        ]
      }
    }
  },
  hy: {
    nav: {
      home: 'Գլխավոր',
      services: 'Ծառայություններ',
      about: 'Մեր մասին',
      team: 'Թիմ',
      contact: 'Կապ'
    },
    hero: {
      title: 'Փորձագիտական իրավական լուծումներ ձեր հանգստության համար',
      subtitle: '15 տարվա փորձով մենք տրամադրում ենք համապարփակ իրավական ծառայություններ՝ անսասան նվիրվածությամբ արդարադատության և հաճախորդների գոհունակության նկատմամբ:',
      cta: 'Ստանալ խորհրդատվություն'
    },
    services: {
      title: 'Մեր իրավական ծառայությունները',
      subtitle: 'Համապարփակ իրավական լուծումներ՝ հարմարեցված ձեր կարիքներին',
      items: [
        {
          title: 'Կորպորատիվ իրավունք',
          description: 'Փորձագիտական ուղղորդում բիզնեսի ստեղծման, պայմանագրերի, միաձուլումների և կորպորատիվ կառավարման հարցերում:'
        },
        {
          title: 'Քաղաքացիական վեճեր',
          description: 'Ակտիվ ներկայացուցչություն քաղաքացիական վեճերում, անձնական վնասի պահանջներում և առևտրային վեճերում:'
        },
        {
          title: 'Ընտանեկան իրավունք',
          description: 'Գթասիրական աջակցություն ամուսնալուծության, խնամակալության, որդեգրման և այլ ընտանեկան իրավական հարցերում:'
        },
        {
          title: 'Անշարժ գույքի իրավունք',
          description: 'Լրիվ իրավական ծառայություններ գույքային գործարքների, վեճերի և անշարժ գույքի ներդրումների համար:'
        },
        {
          title: 'Քրեական պաշտպանություն',
          description: 'Փորձառու պաշտպան փաստաբաններ, որոնք պաշտպանում են ձեր իրավունքները քրեական վարույթներում:'
        },
        {
          title: 'Ներգաղթի իրավունք',
          description: 'Համապարփակ ներգաղթային ծառայություններ՝ ներառյալ վիզաներ, քաղաքացիություն և արտաքսման պաշտպանություն:'
        }
      ]
    },
    about: {
      title: 'Legal Eyes-ի մասին',
      subtitle: 'Ձեր վստահելի իրավական գործընկերը 2008 թվականից',
      description: 'Legal Eyes-ը գտնվում է իրավական գերազանցության առաջնագծում՝ տրամադրելով նորարարական լուծումներ և անսասան պաշտպանություն մեր հաճախորդների համար: Մեր փորձառու փաստաբանների թիմը համատեղում է խորը իրավական գիտելիքները՝ հանձնառությամբ հասնելու լավագույն հնարավոր արդյունքների:',
      features: [
        'Փորձագիտական իրավական խորհրդատվություն',
        'Հաճախորդների աջակցություն 24/7',
        'Բազմալեզու ծառայություններ',
        'Ապացուցված ռեկորդ'
      ],
      stats: {
        experience: 'Տարվա փորձ',
        cases: 'Հաղթած գործեր',
        clients: 'Գոհ հաճախորդներ',
        success: 'Հաջողության տոկոս'
      }
    },
    team: {
      title: 'Մեր իրավական թիմը',
      subtitle: 'Ծանոթացեք մեր փորձառու փաստաբանների հետ',
      members: [
        {
          name: 'Սարա Միթչել',
          position: 'Ավագ գործընկեր, կորպորատիվ իրավունք',
          description: 'Մասնագիտացած է միաձուլումներում և ձեռքբերումներում՝ 20+ տարվա փորձով կորպորատիվ գործարքներում:'
        },
        {
          name: 'Դեյվիդ Ռոդրիգես',
          position: 'Գործընկեր, քրեական պաշտպանություն',
          description: 'Նախկին դատախազ՝ լայն դատական փորձով բարդ քրեական գործերում:'
        },
        {
          name: 'Էմիլի Չեն',
          position: 'Կրտսեր գործընկեր, ընտանեկան իրավունք',
          description: 'Նվիրված է ընտանիքներին օգնելուն բարդ իրավական իրավիճակներում նավարկելիս՝ գթասրտությամբ և փորձագիտությամբ:'
        }
      ]
    },
    contact: {
      title: 'Կապվեք մեզ հետ',
      subtitle: 'Կապվեք խորհրդատվության համար',
      form: {
        name: 'Լրիվ անուն',
        email: 'Էլ. փոստի հասցե',
        subject: 'Թեմա',
        message: 'Հաղորդագրություն',
        send: 'Ուղարկել հաղորդագրությունը',
        nameRequired: 'Անունը պարտադիր է',
        emailRequired: 'Էլ. փոստը պարտադիր է',
        emailInvalid: 'Մուտքագրեք վավեր էլ. փոստ',
        subjectRequired: 'Թեման պարտադիր է',
        messageRequired: 'Հաղորդագրությունը պարտադիր է',
        success: 'Հաղորդագրությունը հաջողությամբ ուղարկվեց:',
        error: 'Չհաջողվեց ուղարկել հաղորդագրությունը: Փորձեք կրկին:'
      },
      info: {
        address: 'Արդարադատության բուլվար 123, Իրավական շրջան, Քաղաք 12345',
        phone: '+1 (555) 123-4567',
        email: 'info@legaleyes.com',
        hours: 'Երկ-Ուրբ: 9:00 - 18:00',
        addressLabel: 'Հասցե',
        phoneLabel: 'Հեռախոս',
        emailLabel: 'Էլ. փոստ',
        hoursLabel: 'Աշխատանքային ժամեր'
      }
    },
    footer: {
      description: 'Legal Eyes-ը տրամադրում է փորձագիտական իրավական ծառայություններ ամբողջականությամբ, նվիրվածությամբ և արդյունքներով:',
      quickLinks: 'Արագ հղումներ',
      services: 'Ծառայություններ',
      contact: 'Կապի տվյալներ',
      rights: '© 2024 Legal Eyes: Բոլոր իրավունքները պաշտպանված են:'
    },
    serviceDetail: {
      learnMore: 'Իմանալ ավելին',
      scheduleConsultation: 'Նշանակել խորհրդատվություն',
      callNow: 'Զանգահարել հիմա',
      keyFeatures: 'Հիմնական առանձնահատկություններ',
      whyChoose: 'Ինչու՞ ընտրել մեր',
      servicesQuestion: 'ծառայությունները:',
      ourProcess: 'Մեր գործընթացը',
      howWeHandle: 'Ինչպես ենք մենք վարում ձեր',
      case: 'գործը',
      relatedServicesTitle: 'Կապված ծառայություններ',
      readyToStart: 'Պատրա՞ստ եք սկսել:',
      contactToday: 'Կապվեք մեզ հետ այսօր խորհրդատվության համար ձեր',
      needs: 'կարիքների վերաբերյալ:',
      getConsultation: 'Ստանալ խորհրդատվություն',
      features: {
        corporate: [
          'Բիզնեսի ստեղծում և ներառում',
          'Պայմանագրերի կազմում և վերանայում',
          'Միաձուլումներ և ձեռքբերումներ',
          'Կորպորատիվ կառավարում',
          'Համապատասխանություն և կարգավորում',
          'Մտավոր սեփականության պաշտպանություն'
        ],
        litigation: [
          'Անձնական վնասի պահանջներ',
          'Առևտրային վեճեր',
          'Պայմանագրային վեճեր',
          'Գույքային վեճեր',
          'Աշխատանքային վեճեր',
          'Ապահովագրական պահանջներ'
        ],
        family: [
          'Ամուսնալուծություն և բաժանում',
          'Երեխաների խնամակալություն և աջակցություն',
          'Որդեգրման ծառայություններ',
          'Նախամուսնական պայմանագրեր',
          'Ընտանեկան բռնության պաշտպանություն',
          'Գույքի բաժանում'
        ],
        realEstate: [
          'Անշարժ գույքի գործարքներ',
          'Անշարժ գույքի պայմանագրեր',
          'Սեփականության իրավունքի ստուգում',
          'Գոտիավորում և հողօգտագործում',
          'Անշարժ գույքի վեճեր',
          'Առևտրային անշարժ գույք'
        ],
        criminal: [
          'Հարբած վիճակում վարելու պաշտպանություն',
          'Թմրանյութերի հանցագործությունների պաշտպանություն',
          'Սպիտակ օձիքի հանցագործություններ',
          'Բռնի հանցագործությունների պաշտպանություն',
          'Դաշնային քրեական պաշտպանություն',
          'Բողոքարկումներ և դատավճռից հետո'
        ],
        immigration: [
          'Վիզայի դիմումներ',
          'Կանաչ քարտի մշակում',
          'Քաղաքացիություն և բնականացում',
          'Արտաքսման պաշտպանություն',
          'Ընտանեկան ներգաղթ',
          'Բիզնես ներգաղթ'
        ]
      },
      benefits: {
        corporate: [
          'Փորձագիտական իրավական ուղղորդում բիզնես որոշումների համար',
          'Ռիսկի նվազեցում և համապատասխանության ապահովում',
          'Օպտիմիզացված բիզնես գործառույթներ',
          'Կորպորատիվ շահերի պաշտպանություն'
        ],
        litigation: [
          'Ագրեսիվ ներկայացուցչություն դատարանում',
          'Փորձառու դատական փաստաբաններ',
          'Համապարփակ գործի պատրաստում',
          'Առավելագույն փոխհատուցման վերականգնում'
        ],
        family: [
          'Գթասիրական իրավական աջակցություն',
          'Երեխաների վրա կենտրոնացած լուծումներ',
          'Գաղտնի խորհրդատվություններ',
          'Հուզական և իրավական ուղղորդում'
        ],
        realEstate: [
          'Հարթ անշարժ գույքի գործարքներ',
          'Անվտանգ անշարժ գույքի գործարքներ',
          'Փորձագիտական պայմանագրի վերանայում',
          'Ներդրումների պաշտպանություն'
        ],
        criminal: [
          'Փորձառու դատական փաստաբաններ',
          'Ագրեսիվ պաշտպանական ռազմավարություններ',
          'Սահմանադրական իրավունքների պաշտպանություն',
          'Արտակարգ խորհրդատվություն 24/7'
        ],
        immigration: [
          'Փորձագիտական ներգաղթային ուղղորդում',
          'Բազմալեզու աջակցություն',
          'Համապարփակ գործերի կառավարում',
          'Բարձր հաջողության տոկոս'
        ]
      },
      process: {
        corporate: [
          { step: 1, title: 'Նախնական խորհրդատվություն', description: 'Գնահատում ենք ձեր բիզնես կարիքները և իրավական պահանջները' },
          { step: 2, title: 'Իրավական ռազմավարություն', description: 'Մշակում ենք համապարփակ իրավական ռազմավարություն ձեր բիզնեսի համար' },
          { step: 3, title: 'Փաստաթղթավորում', description: 'Պատրաստում և վերանայում ենք բոլոր անհրաժեշտ իրավական փաստաթղթերը' },
          { step: 4, title: 'Իրականացում', description: 'Կատարում ենք իրավական ռազմավարությունը և ապահովում համապատասխանությունը' }
        ],
        litigation: [
          { step: 1, title: 'Գործի գնահատում', description: 'Ձեր իրավական պահանջի մանրակրկիտ գնահատում' },
          { step: 2, title: 'Հետաքննություն', description: 'Համապարփակ ապացույցների հավաքում և վերլուծություն' },
          { step: 3, title: 'Բանակցություններ', description: 'Փորձ վեճերը լուծել բանակցությունների միջոցով' },
          { step: 4, title: 'Դատական գործընթաց', description: 'Ագրեսիվ դատարանային ներկայացուցչություն անհրաժեշտության դեպքում' }
        ],
        family: [
          { step: 1, title: 'Գաղտնի խորհրդատվություն', description: 'Ձեր ընտանեկան իրավիճակի մասին մասնավոր քննարկում' },
          { step: 2, title: 'Իրավական տարբերակներ', description: 'Բոլոր հասանելի իրավական միջոցների ուսումնասիրություն' },
          { step: 3, title: 'Միջնորդություն', description: 'Հնարավորության դեպքում խաղաղ լուծման փորձ' },
          { step: 4, title: 'Դատարանային ներկայացուցչություն', description: 'Ուժեղ պաշտպանություն ընտանեկան դատական գործընթացներում' }
        ],
        realEstate: [
          { step: 1, title: 'Գույքի վերանայում', description: 'Գույքի և սեփականության իրավունքի համապարփակ ստուգում' },
          { step: 2, title: 'Պայմանագրի վերլուծություն', description: 'Գործարքի բոլոր փաստաթղթերի մանրակրկիտ վերանայում' },
          { step: 3, title: 'Պատշաճ ուշադրություն', description: 'Անշարժ գույքի հարցերի մանրակրկիտ հետաքննություն' },
          { step: 4, title: 'Փակման աջակցություն', description: 'Փակման գործընթացի ամբողջական օգնություն' }
        ],
        criminal: [
          { step: 1, title: 'Արտակարգ խորհրդատվություն', description: 'Անմիջական իրավական օգնություն և իրավունքների պաշտպանություն' },
          { step: 2, title: 'Գործի հետաքննություն', description: 'Մեղադրանքների և ապացույցների մանրակրկիտ հետաքննություն' },
          { step: 3, title: 'Պաշտպանական ռազմավարություն', description: 'Համապարփակ պաշտպանական մոտեցման մշակում' },
          { step: 4, title: 'Դատարանային ներկայացուցչություն', description: 'Ագրեսիվ պաշտպանություն քրեական գործընթացներում' }
        ],
        immigration: [
          { step: 1, title: 'Իրավունքի գնահատում', description: 'Ձեր ներգաղթային հնարավորությունների և իրավունքի գնահատում' },
          { step: 2, title: 'Փաստաթղթավորում', description: 'Բոլոր անհրաժեշտ փաստաթղթերի պատրաստում և կազմակերպում' },
          { step: 3, title: 'Դիմումի ներկայացում', description: 'Դիմումների և հայցերի ներկայացում USCIS-ին' },
          { step: 4, title: 'Հետագա աջակցություն', description: 'Ամբողջ գործընթացի ընթացքում շարունակական աջակցություն' }
        ]
      },
      relatedServices: {
        corporate: [
          { title: 'Պայմանագրային իրավունք', description: 'Համապարփակ պայմանագրային ծառայություններ' },
          { title: 'Աշխատանքային իրավունք', description: 'Աշխատավայրի իրավական լուծումներ' },
          { title: 'Համապատասխանություն', description: 'Կարգավորիչ համապատասխանության ծառայություններ' }
        ],
        litigation: [
          { title: 'Միջնորդություն', description: 'Վեճերի այլընտրանքային լուծում' },
          { title: 'Իրավական հետազոտություն', description: 'Համապարփակ իրավական վերլուծություն' },
          { title: 'Իրավական պաշտպանություն', description: 'Պաշտպանական իրավական ծառայություններ' }
        ],
        family: [
          { title: 'Երեխաների պաշտպանություն', description: 'Երեխաների շահերի պաշտպանություն' },
          { title: 'Գույքային իրավունք', description: 'Ակտիվների բաժանում և պաշտպանություն' },
          { title: 'Պաշտպանական հրամաններ', description: 'Իրավական պաշտպանության ծառայություններ' }
        ],
        realEstate: [
          { title: 'Պայմանագրային իրավունք', description: 'Անշարժ գույքի պայմանագրային ծառայություններ' },
          { title: 'Գույքային վեճեր', description: 'Անշարժ գույքի դատական վեճեր' },
          { title: 'Սեփականության ապահովագրություն', description: 'Գույքի պաշտպանության ծառայություններ' }
        ],
        criminal: [
          { title: 'Բողոքարկումներ', description: 'Քրեական բողոքարկումներ և դատավճռից հետո օգնություն' },
          { title: 'Երաշխիքի լսումներ', description: 'Երաշխիքի և գրավի օգնություն' },
          { title: 'Մեղքի բանակցություններ', description: 'Մեղքի ընդունման բարենպաստ պայմանագրերի բանակցություններ' }
        ],
        immigration: [
          { title: 'Ընտանիքների վերամիավորում', description: 'Ընտանիքների միավորում' },
          { title: 'Աշխատանքային վիզաներ', description: 'Աշխատանքի հիման վրա ներգաղթ' },
          { title: 'Ապաստան և փախստականներ', description: 'Կարիքավորների պաշտպանություն' }
        ]
      }
    }
  }
};
