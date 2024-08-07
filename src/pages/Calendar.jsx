import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    setEventToDelete(clickInfo.event);
    setShowDeleteModal(true);
  };

  const handleDeleteEvent = () => {
    if (eventToDelete) {
      eventToDelete.remove();
      setShowDeleteModal(false);
      setEventToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setEventToDelete(null);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b className="mr-1 text-xs sm:text-sm">{eventInfo.timeText}</b>
        <i className="text-xs sm:text-sm truncate">{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-2 sm:p-4 overflow-x-auto">
          <div className="min-w-[800px]">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              slotDuration={"00:30:00"}
              slotLabelInterval={"01:00"}
              slotLabelFormat={{
                hour: "numeric",
                minute: "2-digit",
                omitZeroMinute: true,
                meridiem: "short",
              }}
              slotMinTime={"00:00:00"}
              slotMaxTime={"24:00:00"}
              initialEvents={[
                { id: createEventId(), title: "Event 1", date: "2024-08-10" },
                { id: createEventId(), title: "Event 2", date: "2024-08-15" },
              ]}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              height="auto"
              contentHeight="auto"
              aspectRatio={1.35}
              stickyHeaderDates={true}
              viewClassNames="text-sm sm:text-base"
              dayHeaderClassNames="text-xs sm:text-sm"
              slotLabelClassNames="text-xs sm:text-sm"
              eventClassNames="p-1"
              dayCellClassNames="h-24 sm:h-32"
              slotLaneClassNames="h-8" // Adjust the height of slot lanes
            />
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-4 rounded-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">Delete Event</h3>
            <p className="text-sm sm:text-base mb-4">
              Are you sure you want to delete the event '{eventToDelete.title}'?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancelDelete}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteEvent}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function createEventId() {
  return String(Math.random()).replace(/\D/g, "").substring(0, 10);
}

export default CalendarComponent;
