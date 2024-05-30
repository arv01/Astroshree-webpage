import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHello() {
    return { title: 'My Website', message: 'Hello, World!' };
  }

  @Get('/free-kundali')
  @Render('free-kundali')
  getFreeKundali() {
    return { title: 'Free Kundali' };
  }

  @Get('/kundali-matching')
  @Render('kundali-matching')
  getKundaliMatching() {
    return { title: 'Kundali Matching' };
  }

  @Get('/horoscope')
  @Render('horoscope')
  getHoroscope() {
    return { title: 'Horoscope' };
  }

  @Get('/horoscope/todays')
  @Render('horoscope-todays')
  getTodaysHoroscope() {
    return { title: 'Today\'s Horoscope' };
  }

  @Get('/horoscope/weekly')
  @Render('horoscope-weekly')
  getWeeklyHoroscope() {
    return { title: 'Weekly Horoscope' };
  }

  @Get('/horoscope/monthly')
  @Render('horoscope-monthly')
  getMonthlyHoroscope() {
    return { title: 'Monthly Horoscope' };
  }

  @Get('/horoscope/yearly')
  @Render('horoscope-yearly')
  getYearlyHoroscope() {
    return { title: 'Yearly Horoscope' };
  }

  @Get('/horoscope/daily')
  @Render('horoscope-daily')
  getDailyHoroscope() {
    return { title: 'Daily Horoscope' };
  }

  @Get('/change-language')
  @Render('change-language')
  getChangeLanguage() {
    return { title: 'Change Language' };
  }

  @Get('/chat-with-astrologer')
  @Render('chat-with-astrologer')
  getChatWithAstrologer() {
    return { title: 'Chat with Astrologer' };
  }

  @Get('/talk-with-astrologer')
  @Render('talk-with-astrologer')
  getTalkWithAstrologer() {
    return { title: 'Talk with Astrologer' };
  }

  @Get('/blog')
  @Render('blog')
  getBlog() {
    return { title: 'Blog' };
  }
}
