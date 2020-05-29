## About Live Polls
Live polls is a web based app that facilitates interaction between a presenter and his or her audiance. A good exaple is a of a class room setting where lets say a teacher whants to ask a question to assess the general understanding of the students before he / she moves forward. Using live polls the teacher can just type the  question as a poll and as the students answer results are shown instanty in an easy to anylse graphical interface.

## Technoligies Used
 * ### react-redux
   * The front end is utilised using react-redux which manages front 
 * ### rails
   * Rails provides API endpoints and logic for the backend
 * ### PostgreSQL
   * All the data is being stored in a PostresgreSQL
## Features
  * ### Polls creation
    This poll is just a simple form where a user can create a poll by giving it a title and options
    ![Poll show page](https://github.com/Solomon-T/live_polls/blob/master/images/poll_create_form.png)
  * ### Poll view
    This is where all the beauty is. On poll view page. The user can see the following
    * a link to the pole specific URL
    * a link to the general URL
    * A bar graph with the poll title, options on the horizontal axis and vote count on the vertical axis.
    * Live updates as long a the poll is being viewed. This was achieve with the code below.
    ```
    constructor(props) {
        super(props);
             this.refreshInterval = null:   
    }
    componentDidMount() {
        this.props.fetchPoll(this.props.pollId)
        this.props.fetchOptions(this.props.pollId)
        this.refreshInterval = setInterval(this.handleRefresh, 250)
        setTimeout(() => clearInterval(this.refreshInterval), 120000);
    }
    componentWillUnmount(){
        // console.log('Component saying bye')
        // debugger
        clearInterval(this.refreshInterval)
    }
    ```
    `this.refreshInterval` is first set in the constructor as null just to me assigned as an interval funtion when the component mounts. When the commponent unmounts this interval is cleared to prevent further database queries. 
    ![Poll show page](https://github.com/Solomon-T/live_polls/blob/master/images/poll_show.png)
### Voting pages
   * #### Full voting page
   This page displays the whole poll title and a form having the options in which participant can choose from
   * #### Voting by `optionID`
   This is a more general page where by the user just imputs the option id from which ever poll they are participating in

## Still to come
  * ### Viting by text
  This feature will utiilise the already implemented voting by optionID
