import { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

function GeneratePage() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

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

  const onGenerateClick = () => {
    console.log('File:', file);
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
                          name="TF"
                          type="checkbox"
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
                          name="Blank"
                          type="checkbox"
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
                          name="short"
                          type="checkbox"
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
                          name="descriptive"
                          type="checkbox"
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
            <button
              type="button"
              onClick={onGenerateClick}
              className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              생성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GeneratePage;
