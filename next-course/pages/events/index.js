import {Fragment} from 'react';
import { useRouter } from 'next/router';
import { getAllEvents }  from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/event-search';

function AllEventsPage(){
    const router = useRouter(); 
    const events = getAllEvents();

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;
        
        router.push(fullPath); //calling 'push' to go to a different page 
    } 

    return(
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </Fragment>
    );
}
export default AllEventsPage;