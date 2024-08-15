mkdir -p temp_rotated

# Convert and rotate each TIFF file
convert \
  \( "20240309192109.5654533.004" -rotate 270 \) \
  \( "20240309192109.5654533.003" -rotate 180 \) \
  \( "20240309192109.5654533.002" -rotate 180 \) \
  \( "20240309192109.5654533.001" -rotate 180 \) \
  -compress jpeg \
  "output.pdf"

# Clean up temporary files
rm -rf temp_rotated

echo "Conversion complete. Output saved as output.pdf"
