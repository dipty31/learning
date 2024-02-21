import Fragment from 'react';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';
import EventSummary from '../components/event-detail/event-summary';
import EventLogistics from '../components/event-detail/event-logistics';
import EventContent from '../components/event-detail/event-content';


function EventDetailPage(){
    const router = useRouter();

    const eventId = router.query.eventId; //since eventId is the name of this dynamic path segment(name of the file)
                          // it'll give the concrete value that was entered in the URL when this page was loaded
   const event = getEventById(eventId);
    
   if(!event){
    return <p>no event was found</p>
   }

    return(
        <Fragment>
            <EventSummary/>
            <EventLogistics 
            date={event.date} 
            address={event.location} 
            image={event.image} 
            imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}
export default EventDetailPage;