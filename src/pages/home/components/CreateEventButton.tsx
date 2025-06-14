import Modal from "@components/Modal";
import useEvents from "@hooks/useEvents";
import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const CreateEventButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit } = useEvents();

  const renderTimeOptions = () => {
    const options = [];
    for (let h = 0; h <= 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        if (h === 24 && m > 0) break;
        const hh = h.toString().padStart(2, "0");
        const mm = m.toString().padStart(2, "0");
        options.push(
          <option key={`${hh}:${mm}`} value={`${hh}:${mm}`}>
            {`${hh}:${mm}`}
          </option>
        );
      }
    }
    return options;
  };

  return (
    <Modal isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)}>
      <Modal.Trigger
        as={
          <button className="cursor-pointer bg-white rounded-2xl py-5 shadow-xl/30 font-bold my-8 hover:bg-gray-200 flex justify-center gap-3 w-[50%]">
            <MdAdd size="24" />
            만들기
          </button>
        }
      />
      <Modal.Content>
        <form
          onSubmit={(e) => handleSubmit(e, () => setIsOpen((prev) => !prev))}
          className="fixed top-[10%] left-[20%] min-w-[450px] bg-[#f0f4f9] z-50 rounded-lg pt-10 pb-2.5 px-9 flex flex-col gap-6"
        >
          <Modal.Trigger
            as={
              <MdClose
                className="absolute top-0 right-0 cursor-pointer"
                size="24"
              />
            }
          />
          <input
            name="title"
            type="text"
            className="text-2xl outline-0 border-b border-b-black w-full"
            placeholder="제목 추가"
            required
          />

          <div className="flex flex-col gap-4">
            <label htmlFor="event_date">날짜*</label>
            <input
              type="date"
              id="event_date"
              name="event_date"
              defaultValue={new Date().toISOString().split("T")[0]}
            />

            <label htmlFor="event_start">시작*</label>
            <select id="event_start" name="event_start" className="outline-0">
              {renderTimeOptions()}
            </select>

            <label htmlFor="event_end">종료*</label>
            <select id="event_end" name="event_end" className="outline-0">
              {renderTimeOptions()}
            </select>

            <label htmlFor="everyweek" className="pr-2">
              매주
            </label>
            <select name="everyweek" id="everyweek" className="outline-0">
              {Array.from({ length: 8 }).map((_, idx) => {
                return (
                  <option key={`${idx}_everyweek`} value={idx}>
                    {idx}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded mt-auto cursor-pointer"
          >
            저장
          </button>
        </form>
      </Modal.Content>
    </Modal>
  );
};

export default CreateEventButton;
