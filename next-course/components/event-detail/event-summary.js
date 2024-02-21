import classes from './event-summary.module.csss';

function EventSummary(props){
    const {title} = props;

    return(
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default EventSummary;