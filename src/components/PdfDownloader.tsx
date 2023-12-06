import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { generatePdfApi } from '../apis/workbookApi';

const PdfDownloader = (props: {id: number}) => {
  const handleDownload = async () => {
    try {
      const response = await generatePdfApi(props.id);
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generated_workbook.pdf');
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <button onClick={handleDownload} className="p-1">
        <ArrowDownTrayIcon className="h-6 w-6 fill-white" />
    </button>
  );
};

export default PdfDownloader;
