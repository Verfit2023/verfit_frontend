import { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { makeQuestionApi, makeSummary, uploadFile } from '../apis/generateApi';

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

function GeneratePage() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [type, setType] = useState(1);
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const onDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const onDragLeave = () => {
    setDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      droppedFile.type === 'application/pdf' &&
      droppedFile.size <= MAX_FILE_SIZE_BYTES
    ) {
      setFile(droppedFile);
    } else {
      alert('허용되지 않은 파일입니다.');
    }
  };

  const onFileInputChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (
      uploadedFile &&
      uploadedFile.type === 'application/pdf' &&
      uploadedFile.size <= MAX_FILE_SIZE_BYTES
    ) {
      setFile(uploadedFile);
    } else {
      alert('허용되지 않은 파일입니다.');
    }
  };

  const onGenerateClick = async () => {
    setIsPending(true);
    if (file == null) {
      alert("파일을 업로드해주세요.");
      setIsPending(false);
      return;
    }
    if (type < 1 || type > 4) {
      alert("잘못된 문제 유형입니다.");
      setIsPending(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file); 

    try {
        const response = await uploadFile(formData);
        const text = response.data.text;
        if (text == "") {
          alert("파일에 텍스트가 존재하지 않습니다.")
          setIsPending(false);
          return;
        }
        const response2 = await makeQuestionApi(type, text);
        const response3 = await makeSummary(text);
        console.log(response2);
        console.log(response3);
        localStorage.setItem('generateProblems', JSON.stringify(response2.data.content));
        localStorage.setItem('generateSummary', JSON.stringify(response3.data.content));
        setIsPending(false);
        navigate('/generate/complete')
    } catch(e) {
        alert("문제 생성 중 오류가 발생하였습니다. 다시 시도해주세요.");
        setIsPending(false);
    }

  };

  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="w-3/4 mx-auto">
        <div className="text-xl font-medium leading-6 text-gray-900 mt-6">문제집 생성</div>
          <form className="bg-white py-4">
            <div className="">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="pdf-upload" className="text-sm font-semibold leading-6 text-gray-900">
                      PDF 파일 업로드
                    </label>
                    <div
                      className={`mt-2 flex justify-center flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${
                        dragging ? 'bg-gray-200' : ''
                      }`}
                      onDragOver={onDragOver}
                      onDragEnter={onDragEnter}
                      onDragLeave={onDragLeave}
                      onDrop={onDrop}
                    >
                      <div className="text-center">
                        <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:text-sky-400"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              accept=".pdf"
                              className="hidden"
                              onChange={onFileInputChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        {file && (
                          <p className="text-xs leading-5 text-gray-600 mt-2">
                            Uploaded file: {file.name}
                          </p>
                        )}
                        <p className="text-xs leading-5 text-gray-600">Pdf up to {MAX_FILE_SIZE_MB}MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">문제 유형</legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="TF"
                          name="type"
                          type="radio"
                          checked={type==1}
                          onChange={() => setType(1)}
                          className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="TF" className="font-medium text-gray-900">
                          T/F
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="Blank"
                          name="type"
                          type="radio"
                          checked={type==2}
                          onChange={() => setType(2)}
                          className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="Blank" className="font-medium text-gray-900">
                          빈칸 채우기
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="short"
                          name="type"
                          type="radio"
                          checked={type==3}
                          onChange={() => setType(3)}
                          className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="short" className="font-medium text-gray-900">
                          단답형
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="descriptive"
                          name="type"
                          type="radio"
                          checked={type==4}
                          onChange={() => setType(4)}
                          className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="descriptive" className="font-medium text-gray-900">
                          서술형
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              취소
            </button>
            {isPending ? (
                <button
                    type="button"
                    disabled
                    className="w-14 h-9 rounded-md bg-sky-500 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                    <svg aria-hidden="true" role="status" className="inline w-4 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                </button>
            ) : (
                <button
                    type="button"
                    onClick={onGenerateClick}
                    className="w-14 h-9 rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                    생성
                </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GeneratePage;
