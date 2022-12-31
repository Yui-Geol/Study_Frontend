import loader from "/components/loader/loader.js";

class DatePicker extends HTMLElement {
  #template;
  #date = new Date();
  #selectedDate = new Date();

  set value(date) {
    this.#date = date;
    this.#selectedDate = new Date(date);
  }

  get value() {
    return this.#formatDate(this.#selectedDate); 
  }

  #formatDate(date) {
    let ISOData = date.toISOString().split("T", 1);
    return ISOData;
  }import loader from "/components/loader/loader.js";

	class DatePicker extends HTMLElement {
		  #template;
		  #date = new Date();
		  #selectedDate = new Date();

		  set value(date) {
			      this.#date = date;
			      this.#selectedDate = new Date(date);
			    }

		  get value() {
			      return this.#formatDate(this.#selectedDate); 
			    }

		  #formatDate(date) {
			      let ISOData = date.toISOString().split("T", 1);
			      return ISOData;
			    }

		  #toggleDatePicker() {
			        this.components.dates.classList.toggle('active');
			    }

		  #goToNextMonth(date) {
			      date.setMonth(date.getMonth() + 1);
			      this.components.mth.textContent = this.#getMonthName(date) + ' ' + date.getFullYear();
			    }

		  #goToPrevMonth(date) {
			      date.setMonth(date.getMonth() - 1);
			      this.components.mth.textContent = this.#getMonthName(date) + ' ' + date.getFullYear();
			    }

		  #getMonthName(date) {
			      const option = { month: 'long'};
			      return new Intl.DateTimeFormat('en-US', option).format(date);
			    }

		  #populateDate() {
			      this.components.weeks.innerHTML = '';
			      this.components.days.innerHTML = '';
			      this.#appendWeekDay();
			      this.#appendDayOfPrevMonth();
			      this.#appendDayOfCurrentMonth();
			    }

		  #appendWeekDay() {
			      const weekDay = this.#getDayOfWeek();
			      for (const day of weekDay) {
					        const week = document.createElement('div');
					        week.classList.add('week');
					        week.textContent = day;
					        this.components.weeks.appendChild(week);
					      }
			    }

		  #getDayOfWeek() {
			      const format = new Intl.DateTimeFormat( 'en-US', { weekday: 'short' }).format;
			      return [...Array(7).keys()]
			        .map((day) => format(new Date(Date.UTC(2022, 7, day+1))));
			    }

		  #appendDayOfPrevMonth() {
			      const firstDayOfWeek = this.#getFirstDayOfWeek(this.#date); 
			      const prevMonth = new Date(this.#date);
			      prevMonth.setMonth(this.#date.getMonth()-1);
			      const prevLastDayOfMonth = this.#getLastDayOfMonth(prevMonth);
			      for (let i = 0; i < firstDayOfWeek; i++){
					        const prevMonthDay = document.createElement('div');
					        prevMonthDay.classList.add('prev-month-day');
					        prevMonthDay.textContent = prevLastDayOfMonth - firstDayOfWeek + (i + 1);
					        this.components.days.appendChild(prevMonthDay);
					        prevMonthDay.onclick = () => {
								        this.#selectedDate.setDate(prevLastDayOfMonth - firstDayOfWeek + (i + 1));
								        this.#selectedDate.setMonth(this.#date.getMonth() - 1);
								        this.#selectedDate.setFullYear(this.#date.getFullYear());
								        if (this.#selectedDate.getMonth() < 0) {
											          this.#selectedDate.setMonth(11);
											          this.#selectedDate.setFullYear(this.#selectedDate.getFullYear() - 1);
											        }
								        this.components.selectedDate.textContent = this.#formatDate(this.#selectedDate);
								        this.#goToPrevMonth(this.#date);
								        this.#toggleDatePicker();
								      };
					      }
			    }

		  #appendDayOfCurrentMonth() {
			      const lastDayOfMonth = this.#getLastDayOfMonth(this.#date); 
			      for (let i = 0; i < lastDayOfMonth; i++) {
					        const day = document.createElement('div');
					        day.classList.add('day');
					        day.textContent = i + 1;
					        if (this.#selectedDate.getDate() == (i + 1) && this.#selectedDate.getFullYear() == this.#date.getFullYear() && this.#selectedDate.getMonth() == this.#date.getMonth()) {
								       day.classList.add('selected');
								      }
					        day.onclick = () => {
								        this.#selectedDate.setDate(i + 1);
								        this.#selectedDate.setMonth(this.#date.getMonth());
								        this.#selectedDate.setFullYear(this.#date.getFullYear());
								        this.components.selectedDate.textContent = this.#formatDate(this.#selectedDate);
								        this.#toggleDatePicker();

								      };
					        this.components.days.appendChild(day);
					      }
			    }

		  #getFirstDayOfWeek(date) {
			      const year = date.getFullYear();
			      let month = date.getMonth() + 1;
			      if(month < 10) month = '0' + month;
			      return new Date(year + '-' + month+'-01').getDay();
			    }

		  #getLastDayOfMonth(date) {
			      const year = date.getFullYear();
			      const month = date.getMonth();
			      return new Date(year, month + 1, 0).getDate();
			    }

		  constructor() {
			      super();
			      const render = async () => {
					        this.#template = await loader.loadHTML(`/components/datePicker/datePicker.html`);
					      }

			      this.ready = render(this);
			    }

		  async connectedCallback() {
			      await this.ready;
			      this.innerHTML = this.#template;
			      this.components = {
					        datePicker: this.querySelector('.DatePicker'),
					        selectedDate: this.querySelector('.selected-date'),
					        dates: this.querySelector('.dates'),
					        mth: this.querySelector('.dates .month .mth'),
					        nextMth: this.querySelector('.dates .month .next-mth'),
					        prevMth: this.querySelector('.dates .month .prev-mth'),
					        weeks: this.querySelector('.dates .weeks'),
					        days: this.querySelector('.dates .days')
					      };

			      this.components.selectedDate.textContent = this.#formatDate(this.#date);
			      this.components.mth.textContent = this.#getMonthName(this.#date) + ' ' + this.#date.getFullYear();

			      this.components.selectedDate.addEventListener("click", async () => {
					        this.#toggleDatePicker();
					        this.#populateDate();
					      });

			      this.components.nextMth.addEventListener("click", async () => {
					        this.#goToNextMonth(this.#date);
					        this.#populateDate();
					      });

			      this.components.prevMth.addEventListener("click", async () => {
					        this.#goToPrevMonth(this.#date);
					        this.#populateDate();
					      });

			    }
	}

	customElements.define("date-picker", DatePicker);

  #toggleDatePicker() {
      this.components.dates.classList.toggle('active');
  }

  #goToNextMonth(date) {
    date.setMonth(date.getMonth() + 1);
    this.components.mth.textContent = this.#getMonthName(date) + ' ' + date.getFullYear();
  }

  #goToPrevMonth(date) {
    date.setMonth(date.getMonth() - 1);
    this.components.mth.textContent = this.#getMonthName(date) + ' ' + date.getFullYear();
  }

  #getMonthName(date) {
    const option = { month: 'long'};
    return new Intl.DateTimeFormat('en-US', option).format(date);
  }

  #populateDate() {
    this.components.weeks.innerHTML = '';
    this.components.days.innerHTML = '';
    this.#appendWeekDay();
    this.#appendDayOfPrevMonth();
    this.#appendDayOfCurrentMonth();
  }

  #appendWeekDay() {
    const weekDay = this.#getDayOfWeek();
    for (const day of weekDay) {
      const week = document.createElement('div');
      week.classList.add('week');
      week.textContent = day;
      this.components.weeks.appendChild(week);
    }
  }

  #getDayOfWeek() {
    const format = new Intl.DateTimeFormat( 'en-US', { weekday: 'short' }).format;
    return [...Array(7).keys()]
      .map((day) => format(new Date(Date.UTC(2022, 7, day+1))));
  }

  #appendDayOfPrevMonth() {
    const firstDayOfWeek = this.#getFirstDayOfWeek(this.#date); 
    const prevMonth = new Date(this.#date);
    prevMonth.setMonth(this.#date.getMonth()-1);
    const prevLastDayOfMonth = this.#getLastDayOfMonth(prevMonth);
    for (let i = 0; i < firstDayOfWeek; i++){
      const prevMonthDay = document.createElement('div');
      prevMonthDay.classList.add('prev-month-day');
      prevMonthDay.textContent = prevLastDayOfMonth - firstDayOfWeek + (i + 1);
      this.components.days.appendChild(prevMonthDay);
      prevMonthDay.onclick = () => {
        this.#selectedDate.setDate(prevLastDayOfMonth - firstDayOfWeek + (i + 1));
        this.#selectedDate.setMonth(this.#date.getMonth() - 1);
        this.#selectedDate.setFullYear(this.#date.getFullYear());
        if (this.#selectedDate.getMonth() < 0) {
          this.#selectedDate.setMonth(11);
          this.#selectedDate.setFullYear(this.#selectedDate.getFullYear() - 1);
        }
        this.components.selectedDate.textContent = this.#formatDate(this.#selectedDate);
        this.#goToPrevMonth(this.#date);
        this.#toggleDatePicker();
      };
    }
  }

  #appendDayOfCurrentMonth() {
    const lastDayOfMonth = this.#getLastDayOfMonth(this.#date); 
    for (let i = 0; i < lastDayOfMonth; i++) {
      const day = document.createElement('div');
      day.classList.add('day');
      day.textContent = i + 1;
      if (this.#selectedDate.getDate() == (i + 1) && this.#selectedDate.getFullYear() == this.#date.getFullYear() && this.#selectedDate.getMonth() == this.#date.getMonth()) {
       day.classList.add('selected');
      }
      day.onclick = () => {
        this.#selectedDate.setDate(i + 1);
        this.#selectedDate.setMonth(this.#date.getMonth());
        this.#selectedDate.setFullYear(this.#date.getFullYear());
        this.components.selectedDate.textContent = this.#formatDate(this.#selectedDate);
        this.#toggleDatePicker();

      };
      this.components.days.appendChild(day);
    }
  }

  #getFirstDayOfWeek(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if(month < 10) month = '0' + month;
    return new Date(year + '-' + month+'-01').getDay();
  }

  #getLastDayOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  }

  constructor() {
    super();
    const render = async () => {
      this.#template = await loader.loadHTML(`/components/datePicker/datePicker.html`);
    }

    this.ready = render(this);
  }

  async connectedCallback() {
    await this.ready;
    this.innerHTML = this.#template;
    this.components = {
      datePicker: this.querySelector('.DatePicker'),
      selectedDate: this.querySelector('.selected-date'),
      dates: this.querySelector('.dates'),
      mth: this.querySelector('.dates .month .mth'),
      nextMth: this.querySelector('.dates .month .next-mth'),
      prevMth: this.querySelector('.dates .month .prev-mth'),
      weeks: this.querySelector('.dates .weeks'),
      days: this.querySelector('.dates .days')
    };

    this.components.selectedDate.textContent = this.#formatDate(this.#date);
    this.components.mth.textContent = this.#getMonthName(this.#date) + ' ' + this.#date.getFullYear();

    this.components.selectedDate.addEventListener("click", async () => {
      this.#toggleDatePicker();
      this.#populateDate();
    });

    this.components.nextMth.addEventListener("click", async () => {
      this.#goToNextMonth(this.#date);
      this.#populateDate();
    });

    this.components.prevMth.addEventListener("click", async () => {
      this.#goToPrevMonth(this.#date);
      this.#populateDate();
    });

  }
}

customElements.define("date-picker", DatePicker);
