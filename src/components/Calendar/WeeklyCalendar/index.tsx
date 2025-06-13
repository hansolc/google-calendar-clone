const daysArray = ["월", "화", "수", "목", "금", "토", "일"];
const timeArray = Array.from({ length: 15 }, (_, idx) => idx);

const WeeklyCalendar = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[60px]"></div>
        <div className="flex grow shrink">
          {daysArray.map((d, idx) => {
            return (
              <div key={`${idx}_temp`} className="grow shrink text-center">
                <div>{d}</div>
                <div>{idx}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[600px] overflow-y-scroll">
        <div className="flex">
          {/* 시간영역 */}
          <div className="w-[60px] text-xs flex flex-col">
            {timeArray.map((_, idx) => {
              return (
                <div key={`${idx}_time_temp`} className="h-[64px] relative">
                  <span className="absolute top-[-6px]">{`오전${idx}시`}</span>
                </div>
              );
            })}
          </div>
          {/* 표영역 */}
          <div className="grow shrink">
            {timeArray.map((_, idx) => {
              return (
                <div className="flex" key={`${idx}_temp_temp_key`}>
                  {daysArray.map((_, idx) => {
                    return (
                      <div className="basis-0 grow min-w-0">
                        <div
                          key={`${idx}_temp_table_key`}
                          className="border-l-black border-r-black border-t border-l h-[64px] relative flex"
                        >
                          {(idx === 3 || idx === 5) && (
                            <div className="absolute bg-black text-white w-full truncate">
                              아주아주긴텍스트테스트testtesttesteventeventevent
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyCalendar;
