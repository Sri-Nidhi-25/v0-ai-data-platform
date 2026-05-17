'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react'

interface UploadProps {
  onClose: () => void
}

export function UploadSection({ onClose }: UploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>(
    'idle'
  )

  const supportedFormats = ['PDF', 'DOCX', 'CSV', 'XML', 'TXT', 'JPG', 'PNG']

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    setUploadedFiles([...uploadedFiles, ...files])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setUploadedFiles([...uploadedFiles, ...files])
    }
  }

  const handleUpload = async () => {
    if (uploadedFiles.length === 0) return

    setUploadStatus('uploading')

    // Simulate upload
    setTimeout(() => {
      setUploadStatus('success')
      setTimeout(() => {
        onClose()
      }, 2000)
    }, 2000)
  }

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-2xl border-border/50">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">Upload Files</h2>
          <p className="text-muted-foreground mb-8">
            Upload business documents and let AI transform them into clean, structured data
          </p>

          {/* Drag and Drop Area */}
          <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 cursor-pointer ${
              isDragging
                ? 'border-blue-500 bg-blue-500/5'
                : 'border-border/50 hover:border-border'
            }`}
          >
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
              accept=".pdf,.docx,.csv,.xml,.txt,.jpg,.png"
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Drag files here or click to browse
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF, DOCX, CSV, XML, TXT, JPG, PNG
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* Supported Formats */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium mb-2">Supported Formats:</p>
            <div className="flex flex-wrap gap-2">
              {supportedFormats.map((format) => (
                <span
                  key={format}
                  className="px-3 py-1 bg-background rounded-lg text-xs font-medium"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="mt-8 space-y-3">
              <p className="text-sm font-medium">Files to Upload ({uploadedFiles.length})</p>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {uploadedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(idx)}
                      className="p-2 hover:bg-muted rounded transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Status Messages */}
          {uploadStatus === 'uploading' && (
            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-blue-500 border-r-transparent animate-spin" />
              Processing your files... This may take a few moments.
            </div>
          )}

          {uploadStatus === 'success' && (
            <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Files uploaded successfully! Your data is being processed.
            </div>
          )}

          {uploadStatus === 'error' && (
            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              An error occurred during upload. Please try again.
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex gap-3 justify-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleUpload}
              disabled={uploadedFiles.length === 0 || uploadStatus === 'uploading'}
              className="gap-2"
            >
              {uploadStatus === 'uploading' ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Upload Files
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
